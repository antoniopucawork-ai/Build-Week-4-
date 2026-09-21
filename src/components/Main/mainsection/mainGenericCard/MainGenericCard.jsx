import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import LinkedinButton from "../../../reusable/buttons/LinkedinButton";
import { BUTTON_VARIANT } from "../../../reusable/buttons/buttonVariants";
import { useExperiences } from "../../../../api/useExperiences";
import {
  createExperience,
  updateExperience,
  deleteExperience,
} from "../../../../api/strive";
import SingleGenericCard from "../singlegenericcard/SingleGenericCard";
import ExperienceForm from "./ExperienceForm";
import "./MainGenericCard.css";

const MainGenericCard = ({ profile }) => {
  const {
    experiences,
    loading,
    error,
    fetchExperiences,
  } = useExperiences(profile?._id);

  const [showForm, setShowForm] = useState(false);
  const [editingExperience, setEditingExperience] = useState(null);

  const formatDate = (date) => {
    if (!date) {
      return "Presente";
    }

    return new Date(date).toLocaleDateString("it-IT", {
      month: "long",
      year: "numeric",
    });
  };

  const handleCreateExperience = async (experienceData) => {
    try {
      await createExperience(profile._id, experienceData);

      await fetchExperiences();

      setShowForm(false);
    } catch (error) {
      console.error("ERRORE CREAZIONE:", error);
    }
  };

  const handleUpdateExperience = async (experienceData) => {
    try {
      await updateExperience(
        profile._id,
        editingExperience._id,
        experienceData
      );

      await fetchExperiences();

      setEditingExperience(null);
    } catch (error) {
      console.error("ERRORE MODIFICA:", error);
    }
  };
  const handleDeleteExperience = async (experience) => {
    const confirmed = window.confirm(
      `Vuoi davvero eliminare l'esperienza "${experience.role}" presso ${experience.company}?`
    );

    if (!confirmed) {
      return;
    }

    try {
      await deleteExperience(
        profile._id,
        experience._id
      );

      await fetchExperiences();
    } catch (error) {
      console.error("ERRORE ELIMINAZIONE:", error);
    }
  };

  const handleOpenCreateForm = () => {
    setEditingExperience(null);
    setShowForm(true);
  };

  const handleOpenEditForm = (experience) => {
    setShowForm(false);
    setEditingExperience(experience);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingExperience(null);
  };

  if (loading) {
    return <p>Caricamento esperienze...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Container className="genericCard">
      <Row>
        <Col className="genericCardHeader">
          <h5>Esperienze</h5>

          <div>
            <LinkedinButton
              customVariant={BUTTON_VARIANT.ICON_ONLY.PLUS}
              onClick={handleOpenCreateForm}
            />
          </div>
        </Col>
      </Row>

      {showForm && (
        <Row>
          <Col>
            <ExperienceForm
              onSave={handleCreateExperience}
              onCancel={handleCancel}
            />
          </Col>
        </Row>
      )}

      {editingExperience && (
        <Row>
          <Col>
            <ExperienceForm
              experience={editingExperience}
              onSave={handleUpdateExperience}
              onCancel={handleCancel}
            />
          </Col>
        </Row>
      )}

      <Row>
        <Col>
          {experiences.length === 0 ? (
            <p>Nessuna esperienza presente.</p>
          ) : (
            experiences.map((experience) => (
              <SingleGenericCard
                key={experience._id}
                title={experience.role}
                description={experience.company}
                date={`${formatDate(
                  experience.startDate
                )} - ${formatDate(experience.endDate)}`}
                details={experience.description}
                onEdit={() => handleOpenEditForm(experience)}
                onDelete={() => handleDeleteExperience(experience)}
              />
            ))
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MainGenericCard;