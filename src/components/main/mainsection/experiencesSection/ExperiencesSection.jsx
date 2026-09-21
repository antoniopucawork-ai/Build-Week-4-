import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useExperiences } from "../../../../api/useExperiences";
import LinkedinButton from "../../../reusable/buttons/LinkedinButton";
import { BUTTON_VARIANT } from "../../../reusable/buttons/buttonVariants";
import { ArrowRight } from "lucide-react";
import { formatExperienceDate } from "../../../reusable/experienceUtils/experienceUtils";
import ExperienceModal from "./ExperienceModal";

const ExperienceSection = ({ userId, isOwnProfile }) => {
  const navigate = useNavigate();
  const { experiences, loading, error, fetchExperiences } =
    useExperiences(userId);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingExperience, setEditingExperience] = useState(null); // null = creazione
  const visibleExperiences = experiences.slice(0, 2);

  const handleAddClick = () => {
    setEditingExperience(null);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setEditingExperience(null);
  };

  const handleSaveSuccess = () => {
    handleModalClose();
    fetchExperiences();
  };

  return (
    <div className="bg-white rounded-3 border pt-2 ">
      <div className="pe-1 ps-1">
        <div className="p-4 pb-3 d-flex justify-content-between align-items-center">
          <h2 className="mb-0 fw-semibold fs-5">Esperienza</h2>
          {isOwnProfile && (
            <div className="d-flex gap-3 align-items-center">
              <LinkedinButton
                customVariant={BUTTON_VARIANT.ICON_ONLY.PLUS}
                onClick={handleAddClick}
              />

              <LinkedinButton
                customVariant={BUTTON_VARIANT.ICON_ONLY.EDIT}
                onClick={() => navigate("/details/experience")}
              />
            </div>
          )}
        </div>

        {loading && (
          <p className="px-4 pb-3 text-muted small">Caricamento...</p>
        )}
        {error && <p className="px-4 pb-3 text-danger small">{error}</p>}

        <div className="pb-2">
          {(!experiences || experiences.length === 0) && !loading && (
            <p className="px-4 pb-3 text-muted small">
              Nessuna esperienza inserita.
            </p>
          )}

          {experiences &&
            visibleExperiences.map((exp, index) => (
              <div
                key={exp._id}
                className={`p-3 mb-3 mx-2 position-relative ${
                  index !== visibleExperiences.length - 1 ? "border-bottom" : ""
                }`}
              >
                <div>
                  <p className="fw-semibold mb-0">{exp.role}</p>

                  <p className="mb-0 text-muted small">{exp.company}</p>

                  <p className="mb-0 text-muted small">
                    {formatExperienceDate(exp.startDate)} -{" "}
                    {exp.endDate
                      ? formatExperienceDate(exp.endDate)
                      : "Presente"}
                  </p>

                  {exp.area && (
                    <p className="mb-0 text-muted small">{exp.area}</p>
                  )}

                  {exp.description && (
                    <p className="mt-2 mb-0 small">{exp.description}</p>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
      {experiences.length > 2 && (
        <div className="border-top">
          <button
            className="btn showAllBtn"
            onClick={() => navigate("/details/experience")}
          >
            Mostra tutto ({experiences.length})
            <ArrowRight size={16} className="ms-1" />
          </button>
        </div>
      )}

      {modalOpen && (
        <ExperienceModal
          userId={userId}
          experience={editingExperience}
          onClose={handleModalClose}
          onSaveSuccess={handleSaveSuccess}
        />
      )}
    </div>
  );
};

export default ExperienceSection;
