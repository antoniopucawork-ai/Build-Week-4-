import { Eye, FolderOpen, X } from "lucide-react";

const RecommendedForYou = () => {
  return (
    <div className="bg-white rounded-3 border pt-2">
      <div className="pe-1 ps-1">
        <div className="p-4 ps-3 pb-0">
          <h2 className="mb-0 fw-semibold mb-1 fs-5">Consigliato per te</h2>

          <div className="text-muted lh-1 small d-flex gap-1">
            <Eye size={16} />
            <p>Visibile solo a te</p>
          </div>
        </div>

        <div className="rounded-3 border p-3 mb-4 me-2 ms-2">
          <div className="d-flex justify-content-end">
            <X size={16} />
          </div>
          <div className="d-flex align-items-center gap-2">
            <FolderOpen size={40} />
            <p className="fw-semibold mb-0">
              Aggiungi progetti che diano risalto alle tue competenze
            </p>
          </div>

          <p className="py-2">
            Mostra ai recruiter come metti a frutto le tue competenze
            aggiungendo progetti al tuo profilo.
          </p>

          <button className="btn btn-outline-dark rounded-pill mt-2 pt-1 pb-1 linkedinOutlineBtn">
            Aggiungi un progetto
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecommendedForYou;
