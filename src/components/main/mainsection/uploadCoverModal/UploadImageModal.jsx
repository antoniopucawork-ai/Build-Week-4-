import { useState, useRef, useEffect } from "react";
import { authHeaders } from "../../../../api/strive";
import { Modal, Button } from "react-bootstrap";
import { Pencil, Camera, Trash2 } from "lucide-react";
import "./UploadImageModal.css";

const ENDPOINT = "https://striveschool-api.herokuapp.com/api";

const UploadImageModal = ({
  currentImage,
  title = "Foto di copertina",
  onClose,
  onUploadSuccess,
}) => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(currentImage);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  const objectUrlRef = useRef(null); // Tengo il riferimento al blob creato per poterlo revocare.

  useEffect(() => {
    return () => { // Ogni URL creato con createObjectURL resta in memoria finche non viene
      if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current); // lo libero alla chiusura del modale
    };
  }, []);

  const handleFileChange = (e) => {
    const selected = e.target.files?.[0];
    if (!selected) return

    if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current) // Revocazione dell'anteprima precedente prima di crearne una nuova
    objectUrlRef.current = URL.createObjectURL(selected)

    setFile(selected)
    setPreview(objectUrlRef.current)
    setError("")
  };

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);
    setError("")

    const formData = new FormData();
    formData.append("profile", file)

    try {
      const response = await fetch(`${ENDPOINT}/profile/me/picture`, {
        method: "POST",
        headers: authHeaders,
        body: formData,
      });

      if (!response.ok) throw new Error(`Upload failed: ${response.status}`);

      await response.json();
      onUploadSuccess();
    } catch (err) {
      setError(err.message || "Caricamento non riuscito. Riprova.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <Modal show onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body className="p-0">
        <div
          className="bg-black d-flex align-items-center justify-content-center overflow-hidden"
          style={{ height: "280px" }}
        >
          {preview && (
            <img
              src={preview}
              alt="Anteprima"
              className="w-100 h-100"
              style={{ objectFit: "cover" }}
            />
          )}
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="d-none"
        />

        <div className="d-flex justify-content-around p-3">
          <Button
            variant="link"
            className="d-flex flex-column align-items-center text-decoration-none"
            disabled
          >
            <Pencil size={20} />
            <span className="small">Modifica</span>
          </Button>
          <Button
            variant="link"
            className="d-flex flex-column align-items-center text-decoration-none"
            onClick={() => fileInputRef.current?.click()}
          >
            <Camera size={20} />
            <span className="small">Cambia foto</span>
          </Button>
          <Button
            variant="link"
            className="d-flex flex-column align-items-center text-decoration-none"
            disabled
          >
            <Trash2 size={20} />
            <span className="small">Elimina</span>
          </Button>
        </div>

        {error && <p className="text-danger small px-3 pb-3 mb-0">{error}</p>}
      </Modal.Body>

      {file && (
        <Modal.Footer>
          <Button
            variant="primary"
            className="rounded-pill"
            onClick={handleUpload}
            disabled={uploading}
          >
            {uploading ? "Caricamento..." : "Salva"}
          </Button>
        </Modal.Footer>
      )}
    </Modal>
  );
};

export default UploadImageModal;