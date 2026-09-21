import { useState } from "react";
import "./ExperienceForm.css";

const ExperienceForm = ({ experience, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    role: experience?.role || "",
    company: experience?.company || "",
    startDate: experience?.startDate ? experience.startDate.slice(0, 10) : "",
    endDate: experience?.endDate ? experience.endDate.slice(0, 10) : "",
    description: experience?.description || "",
    area: experience?.area || "",
  });

  const [currentJob, setCurrentJob] = useState(!experience?.endDate);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCurrentJobChange = (event) => {
    const checked = event.target.checked;

    setCurrentJob(checked);

    if (checked) {
      setFormData((prev) => ({
        ...prev,
        endDate: "",
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const dataToSave = {
      ...formData,
      endDate: currentJob ? null : formData.endDate,
    };

    await onSave(dataToSave);
  };

  return (
    <div className="experience-form-wrapper">
      <div className="experience-form-header">
        <h3>{experience ? "Modifica esperienza" : "Aggiungi esperienza"}</h3>

        <button
          type="button"
          className="experience-form-close"
          onClick={onCancel}
        >
          ×
        </button>
      </div>

      <form className="experience-form" onSubmit={handleSubmit}>
        <div className="experience-form-field">
          <label htmlFor="role">Qualifica</label>
          <input
            id="role"
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Es. Frontend Developer"
            required
          />
        </div>

        <div className="experience-form-field">
          <label htmlFor="company">Nome azienda</label>
          <input
            id="company"
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Es. Epicode"
            required
          />
        </div>

        <div className="experience-form-row">
          <div className="experience-form-field">
            <label htmlFor="startDate">Data di inizio</label>

            <input
              id="startDate"
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
            />
          </div>

          {!currentJob && (
            <div className="experience-form-field">
              <label htmlFor="endDate">Data di fine</label>

              <input
                id="endDate"
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
              />
            </div>
          )}
        </div>

        <label className="experience-current-job">
          <input
            type="checkbox"
            checked={currentJob}
            onChange={handleCurrentJobChange}
          />

          <span>Attualmente lavoro qui</span>
        </label>

        <div className="experience-form-field">
          <label htmlFor="description">Descrizione</label>

          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Descrivi le tue attività, responsabilità e risultati..."
            rows="5"
          />
        </div>

        <div className="experience-form-field">
          <label htmlFor="area">Località</label>

          <input
            id="area"
            type="text"
            name="area"
            value={formData.area}
            onChange={handleChange}
            placeholder="Es. Napoli, Italia"
          />
        </div>

        <div className="experience-form-actions">
          <button
            type="button"
            className="experience-cancel-button"
            onClick={onCancel}
          >
            Annulla
          </button>

          <button type="submit" className="experience-save-button">
            Salva
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExperienceForm;
