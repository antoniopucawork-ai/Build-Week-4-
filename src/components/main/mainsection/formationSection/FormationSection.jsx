import LinkedinButton from "../../../reusable/buttons/LinkedinButton";
import { BUTTON_VARIANT } from "../../../reusable/buttons/buttonVariants";
import { ArrowRight } from "lucide-react";
import { formatExperienceDate } from "../../../reusable/experienceUtils/experienceUtils";

const formations = [
  {
    id: 1,
    school: "ITS Academy Lazio",
    degree: "Web Developer",
    field: "Sviluppo Web",
    startDate: "2024-01-01",
    endDate: "2026-06-01",
    description: "Percorso di formazione...",
  },
  {
    id: 2,
    school: "Istituto XYZ",
    degree: "Diploma di Grafica Pubblicitaria",
    field: "Grafica",
    startDate: "2018-09-01",
    endDate: "2023-06-01",
    description: "Percorso di studi...",
  },
  {
    id: 3,
    school: "Corso ABC",
    degree: "Frontend Developer",
    field: "Web Development",
    startDate: "2023-01-01",
    endDate: "2023-06-01",
    description: "Corso di formazione...",
  },
];

const FormationSection = ( {isOwnProfile} ) => {
  const visibleFormations = formations.slice(0, 2);

  return (
    <div className="bg-white rounded-3 border pt-2">
      <div className="pe-1 ps-1">
        <div className="p-4 pb-3 d-flex justify-content-between align-items-center">
          <h2 className="mb-0 fw-semibold fs-5">Formazione</h2>
            {isOwnProfile && (
          <div className="d-flex gap-3 align-items-center">
            <LinkedinButton customVariant={BUTTON_VARIANT.ICON_ONLY.PLUS} />

            <LinkedinButton customVariant={BUTTON_VARIANT.ICON_ONLY.EDIT} />
          </div>
            )}
        </div>

        <div className="pb-2">
          {visibleFormations.map((formation, index) => (
            <div
              key={formation.id}
              className={`p-3 mb-3 mx-2 ${
                index !== visibleFormations.length - 1 ? "border-bottom" : ""
              }`}
            >
              <div>
                <p className="fw-semibold mb-0">{formation.degree}</p>

                <p className="mb-0 text-muted small">{formation.school}</p>

                <p className="mb-0 text-muted small">
                  {formatExperienceDate(formation.startDate)} -{" "}
                  {formatExperienceDate(formation.endDate)}
                </p>

                {formation.field && (
                  <p className="mb-0 text-muted small">{formation.field}</p>
                )}

                {formation.description && (
                  <p className="mt-2 mb-0 small">{formation.description}</p>
                )}
              </div>
            </div>
          ))}

          {formations.length > 2 && (
            <div className="border-top">
              <button className="btn showAllBtn">
                Mostra tutto ({formations.length})
                <ArrowRight size={16} className="ms-1" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormationSection;
