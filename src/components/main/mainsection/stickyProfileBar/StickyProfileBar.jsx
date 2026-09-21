import { useEffect, useState } from "react";
import LinkedinButton from "../../../reusable/buttons/LinkedinButton"
import { BUTTON_VARIANT } from "../../../reusable/buttons/buttonVariants"
import "./StickyProfileBar.css";

export const StickyProfileBar = ({ profile, isOwnProfile }) => { // Riceve il profilo dalla pagina invece di rifare la fetch dell utente del token.
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // mostra la barra dopo, ad es., 250px di scroll
      setIsVisible(window.scrollY > 250);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!profile) return null;


  return (
    <div
      className={`stickyProfileBar position-fixed start-0 w-100 d-none d-md-flex align-items-center gap-2${isVisible ? " is-visible" : ""}`}
      aria-hidden={!isVisible}
    >
      <div className="stickyProfileBarContainer">
        <img
          src={profile.image}
          alt={profile.name}
          className="stickyAvatar rounded-circle object-fit-cover"
        />

        <div className="stickyInfo d-flex flex-column">
          <span className="stickyName fw-semibold">
            {profile.name} {profile.surname}
          </span>

          <span className="stickyTitle">{profile.title}</span>
        </div>

        {isOwnProfile ? (
          <div className="stickyActions d-flex align-items-center gap-2 ms-auto">
            <LinkedinButton customVariant={BUTTON_VARIANT.MAIN.RESOURCE} />

            <LinkedinButton customVariant={BUTTON_VARIANT.MAIN.EHNANCE} />

            <LinkedinButton customVariant={BUTTON_VARIANT.MAIN.ADD_SECTION} />

            <LinkedinButton customVariant={BUTTON_VARIANT.MAIN.AVAILABLE} />
          </div>
        ) : (
         <div className="d-flex gap-2 align-items-center ms-auto">
  <button className="btn btn-outline-dark rounded-pill pt-1 pb-1 linkedinOutlineBtn">
    Altro
  </button>

  <LinkedinButton
    customVariant={BUTTON_VARIANT.MAIN.MESSAGE}
  />
</div>
        )}
      </div>
    </div>
  );
};
