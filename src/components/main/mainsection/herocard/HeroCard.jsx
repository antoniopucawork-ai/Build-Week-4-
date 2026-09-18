import { useProfile } from "../../../../api/useProfile";
import "./HeroCard.css";
import LinkedinButton, {
  BUTTON_VARIANT,
} from "../../../reusable/buttons/LinkedinButton";
import epicode from "../../../../assets/logo/epicode-icon.png";
const HeroCard = () => {
   const { profile, loading, error } = useProfile();

  if (loading) {
    return <p>Caricamento profilo...</p>;
  }

  if (error) {
    return <p>Errore nel caricamento del profilo</p>;
  }

  if (!profile) {
    return null;
  }

  return (
    <div className="hero-card">
      <div className="hero-cover">
        <LinkedinButton
          customVariant={BUTTON_VARIANT.ICON_ONLY.EDIT}
          className="hero-cover-edit"
        />
        <img
          className="hero-profile-img"
          src={profile.image}
          alt={`${profile.name} ${profile.surname}`}
        />
      </div>

      <div className="hero-content">
        <LinkedinButton
          customVariant={BUTTON_VARIANT.ICON_ONLY.EDIT}
          className="hero-profile-edit"
        />
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
        <div className="hero-actions">
          <LinkedinButton customVariant={BUTTON_VARIANT.MAIN.AVAILABLE} />
          <LinkedinButton customVariant={BUTTON_VARIANT.MAIN.ADD_SECTION} />
          <LinkedinButton customVariant={BUTTON_VARIANT.MAIN.EHNANCE} />
          <LinkedinButton customVariant={BUTTON_VARIANT.MAIN.RESOURCE} />
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
