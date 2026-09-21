import "./HeroCard.css";
import { useState } from "react";
import LinkedinButton from "../../../reusable/buttons/LinkedinButton";
import { BUTTON_VARIANT } from "../../../reusable/buttons/buttonVariants";
import epicode from "../../../../assets/logo/epicode-icon.png";
import UploadImageModal from "../uploadCoverModal/UploadImageModal.jsx";
import { Row, Col } from "react-bootstrap";
{
  /* isOwnProfile indica se sto visualizzando il mio profilo o quello di un altro utente.
    fetchProfile permette di aggiornare i dati del profilo dopo una modifica. */
}
const HeroCard = ({ profile, isOwnProfile, fetchProfile }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!profile) {
    return null;
  }

  return (
    <div className="hero-card">
      <div
        className="hero-cover"
        style={{ backgroundImage: `url(${profile.image})` }}
      >
        {isOwnProfile && (
          <LinkedinButton
            customVariant={BUTTON_VARIANT.ICON_ONLY.EDIT}
            className="hero-cover-edit"
            onClick={() => setIsModalOpen(true)}
          />
        )}
        <img
          className="hero-profile-img"
          src={profile.image}
          alt={`${profile.name} ${profile.surname}`}
        />
      </div>

      <div className="hero-content">
        {isOwnProfile && (
          <LinkedinButton
            customVariant={BUTTON_VARIANT.ICON_ONLY.EDIT}
            className="hero-cover-edit"
            onClick={() => setIsModalOpen(true)}
          />
        )}
        <div className="hero-details">
          <div className="hero-info">
            <h2 className="hero-name">
              {profile.name} {profile.surname}
            </h2>

            <p className="hero-title">{profile.title}</p>

            <p className="hero-area">
              {profile.area} ·{" "}
              <span className="hero-contact">Informazioni di contatto</span>
            </p>

            <p className="hero-connections">173 collegamenti</p>
          </div>

          <div className="hero-school">
            <img src={epicode} alt="EPICODE" className="hero-school-logo" />{" "}
            <p>EPICODE Institute of Technology</p>
          </div>
        </div>
        {isOwnProfile && (
          <div className="hero-actions row g-2 align-items-center">
            <div className="col-12 col-md-auto">
              <div className="d-flex justify-content-between align-items-center gap-2">
                <LinkedinButton customVariant={BUTTON_VARIANT.MAIN.AVAILABLE} 
                className="me-md-2 w-100 w-md-auto"/>
                <LinkedinButton
                  customVariant={BUTTON_VARIANT.MAIN.ADD_SECTION}
                  className="w-100 w-md-auto text-nowrap"
                />
                <LinkedinButton
                  customVariant={BUTTON_VARIANT.ICON_ONLY.MORE}
                  className="d-md-none"
                />
              </div>
            </div>
            <div className="col-12 col-md-auto d-flex">
              <LinkedinButton
                customVariant={BUTTON_VARIANT.MAIN.EHNANCE}
                className="w-100 w-md-auto"
              />
            </div>
            <div className="col-md-auto d-none d-md-block">
              <LinkedinButton customVariant={BUTTON_VARIANT.MAIN.RESOURCE} />
            </div>
          </div>
        )}
      </div>
      {isModalOpen && (
        <UploadImageModal
          currentImage={profile.image}
          onClose={() => setIsModalOpen(false)}
          onUploadSuccess={() => {
            setIsModalOpen(false);
            fetchProfile();
          }}
        />
      )}
    </div>
  );
};

export default HeroCard;
