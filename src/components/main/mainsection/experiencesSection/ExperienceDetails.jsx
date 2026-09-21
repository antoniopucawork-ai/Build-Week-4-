import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useProfile } from "../../../../api/useProfile";
import { useExperiences } from "../../../../api/useExperiences";
import LinkedinButton from "../../../reusable/buttons/LinkedinButton";
import { BUTTON_VARIANT } from "../../../reusable/buttons/buttonVariants";
import { formatExperienceDate } from "../../../reusable/experienceUtils/experienceUtils";
import ExperienceModal from "./ExperienceModal";

const ExperienceDetails = () => {
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);
  const [editingExperience, setEditingExperience] = useState(null);

  const {
    profile,
    loading: profileLoading,
    error: profileError,
  } = useProfile();

  const {
    experiences,
    loading: experiencesLoading,
    error: experiencesError,
    fetchExperiences,
  } = useExperiences(profile?._id);

  const handleAddClick = () => {
    setEditingExperience(null);
    setModalOpen(true);
  };

  const handleEditClick = (experience) => {
    setEditingExperience(experience);
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

  if (profileLoading || experiencesLoading) {
    return <p className="text-center py-5">Caricamento...</p>;
  }

  if (profileError || experiencesError) {
    return (
      <p className="text-center py-5 text-danger">Errore nel caricamento.</p>
    );
  }

  return (
    <div className="bg-white rounded-3 border p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center gap-3">
          <button
            className="btn btn-link p-0 text-dark"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={22} />
          </button>
          <h2 className="mb-0 fw-semibold fs-5">Esperienza</h2>
        </div>
        <LinkedinButton
          customVariant={BUTTON_VARIANT.ICON_ONLY.PLUS}
          onClick={handleAddClick}
        />
      </div>

      {experiences.map((experience, index) => (
        <div
          key={experience._id}
          className={`pb-4 mb-4 ${
            index !== experiences.length - 1 ? "border-bottom" : ""
          }`}
        >
          <div className="flex-grow-1">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <h6 className="fw-semibold mb-0">{experience.role}</h6>
                <p className="mb-0 text-muted">{experience.company}</p>
                <p className="mb-0 text-muted small">
                  {formatExperienceDate(experience.startDate)} -{" "}
                  {experience.endDate
                    ? formatExperienceDate(experience.endDate)
                    : "Presente"}
                </p>
                {experience.area && (
                  <p className="mb-0 text-muted small">{experience.area}</p>
                )}
              </div>

              <LinkedinButton
                customVariant={BUTTON_VARIANT.ICON_ONLY.EDIT}
                onClick={() => handleEditClick(experience)}
              />
            </div>

            {experience.description && (
              <p className="mt-3 mb-0" style={{ whiteSpace: "pre-line" }}>
                {experience.description}
              </p>
            )}
          </div>
        </div>
      ))}

      {modalOpen && (
        <ExperienceModal
          userId={profile._id}
          experience={editingExperience}
          onClose={handleModalClose}
          onSaveSuccess={handleSaveSuccess}
        />
      )}
    </div>
  );
};

export default ExperienceDetails;
