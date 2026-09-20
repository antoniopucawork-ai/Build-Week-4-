import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import {
  createExperience,
  updateExperience,
  deleteExperience,
} from "../../../../api/strive";

const MONTHS = [
  "Gennaio",
  "Febbraio",
  "Marzo",
  "Aprile",
  "Maggio",
  "Giugno",
  "Luglio",
  "Agosto",
  "Settembre",
  "Ottobre",
  "Novembre",
  "Dicembre",
];

const CURRENT_YEAR = new Date().getFullYear();
const YEARS = Array.from({ length: 60 }, (_, i) => CURRENT_YEAR - i);

const parseDate = (dateStr) => {
  if (!dateStr) return { month: "", year: "" };
  const [year, month] = dateStr.split("-");
  return { month: String(Number(month) - 1), year };
};

const buildDate = (month, year) => {
  if (month === "" || year === "") return "";

  const paddedMonth = String(Number(month) + 1).padStart(2, "0");
  return `${year}-${paddedMonth}-01`;
};

const ExperienceModal = ({ userId, experience, onClose, onSaveSuccess }) => {
  const isEditing = Boolean(experience);

  const [role, setRole] = useState(experience?.role || "");
  const [company, setCompany] = useState(experience?.company || "");
  const [area, setArea] = useState(experience?.area || "");
  const [description, setDescription] = useState(experience?.description || "");

  const startParsed = parseDate(experience?.startDate);
  const [startMonth, setStartMonth] = useState(startParsed.month);
  const [startYear, setStartYear] = useState(startParsed.year);

  const isCurrentInitial =
    isEditing &&
    (experience.endDate === null || experience.endDate === undefined);
  const [isCurrent, setIsCurrent] = useState(isCurrentInitial);

  const endParsed = parseDate(experience?.endDate);
  const [endMonth, setEndMonth] = useState(endParsed.month);
  const [endYear, setEndYear] = useState(endParsed.year);

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    const payload = {
      role,
      company,
      area,
      description,
      startDate: buildDate(startMonth, startYear),
      endDate: isCurrent ? null : buildDate(endMonth, endYear),
    };

    try {
      if (isEditing) {
        await updateExperience(userId, experience._id, payload);
      } else {
        await createExperience(userId, payload);
      }
      onSaveSuccess();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Sei sicura di voler eliminare questa esperienza?",
    );

    if (!confirmed) return;

    setSaving(true);

    try {
      await deleteExperience(userId, experience._id);
      onSaveSuccess();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <Modal show onHide={onClose} centered scrollable>
      <Modal.Header closeButton>
        <Modal.Title>
          {isEditing ? "Modifica ruolo" : "Aggiungi un ruolo al tuo profilo"}
        </Modal.Title>
      </Modal.Header>

      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          {error && <p className="text-danger small">{error}</p>}

          <div className="d-flex gap-3">
            <Form.Group className="mb-3 flex-fill">
              <Form.Label>Qualifica*</Form.Label>
              <Form.Control
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="Esempio: Senior Product Manager"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3 flex-fill">
              <Form.Label>Organizzazione*</Form.Label>
              <Form.Control
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Esempio: Microsoft"
                required
              />
            </Form.Group>
          </div>

          <Form.Group className="mb-3">
            <Form.Label>Località</Form.Label>
            <Form.Control
              value={area}
              onChange={(e) => setArea(e.target.value)}
              placeholder="Città o area geografica"
            />
          </Form.Group>

          <Form.Check
            type="checkbox"
            id="isCurrentCheck"
            label="Attualmente lavoro qui"
            checked={isCurrent}
            onChange={(e) => setIsCurrent(e.target.checked)}
            className="mb-3"
          />

          <div className="d-flex gap-3">
            <Form.Group className="mb-3 flex-fill">
              <Form.Label>Mese di inizio</Form.Label>
              <Form.Select
                value={startMonth}
                onChange={(e) => setStartMonth(e.target.value)}
                required
              >
                <option value="">Seleziona</option>
                {MONTHS.map((m, i) => (
                  <option key={m} value={i}>
                    {m}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3 flex-fill">
              <Form.Label>Anno di inizio*</Form.Label>
              <Form.Select
                value={startYear}
                onChange={(e) => setStartYear(e.target.value)}
                required
              >
                <option value="">Seleziona</option>
                {YEARS.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </div>

          {!isCurrent && (
            <div className="d-flex gap-3">
              <Form.Group className="mb-3 flex-fill">
                <Form.Label>Mese di fine</Form.Label>
                <Form.Select
                  value={endMonth}
                  onChange={(e) => setEndMonth(e.target.value)}
                >
                  <option value="">Seleziona</option>
                  {MONTHS.map((m, i) => (
                    <option key={m} value={i}>
                      {m}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3 flex-fill">
                <Form.Label>Anno di fine</Form.Label>
                <Form.Select
                  value={endYear}
                  onChange={(e) => setEndYear(e.target.value)}
                >
                  <option value="">Seleziona</option>
                  {YEARS.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </div>
          )}

          <Form.Group className="mb-3">
            <Form.Label>Punti chiave</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Progetti, problemi risolti o risultati raggiunti"
              maxLength={2000}
            />
            <div className="text-end text-muted small mt-1">
              {description.length}/2.000
            </div>
          </Form.Group>
        </Modal.Body>

        <Modal.Footer className="d-flex justify-content-between">
          {isEditing && (
            <Button
              variant="outline-danger"
              onClick={handleDelete}
              disabled={saving}
            >
              Elimina
            </Button>
          )}
          <div className="ms-auto">
            <Button
              variant="outline-secondary"
              className="me-2"
              onClick={onClose}
            >
              Annulla
            </Button>
            <Button variant="primary" type="submit" disabled={saving}>
              {saving ? "Salvataggio..." : "Salva"}
            </Button>
          </div>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default ExperienceModal;
