import { Pencil } from "lucide-react";

const ChangePageSettings = ({ label, value, onEdit, isLast, }) => {
  return (
    <div className={`p-3 ${isLast ? "" : "border-bottom mx-3 px-0"}`}>
      <div className="d-flex justify-content-between align-items-start">
        <div>
          <strong className="fs-5">{label}</strong>
          <p>{value}</p>
        </div>
        <button onClick={onEdit} className="btn align-self-start py-0">
          <Pencil size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChangePageSettings;
