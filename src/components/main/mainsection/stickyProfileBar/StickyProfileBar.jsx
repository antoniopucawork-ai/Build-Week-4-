import { useEffect, useState } from "react";
import { useProfile } from "../../../../api/useProfile";
import "./StickyProfileBar.css";

export const StickyProfileBar = () => {
  const { profile, loading } = useProfile();
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

  if (loading || !profile) return null;


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

        <div className="stickyActions d-flex align-items-center gap-2 ms-auto">
          <button className="btn btn-outline-dark rounded-pill linkedinOutlineBtn stickyBtn">
            Risorse
          </button>

          <button className="btn btn-outline-primary rounded-pill linkedinInfoBtn stickyBtn">
            Migliora profilo
          </button>

          <button className="btn btn-outline-primary rounded-pill linkedinInfoBtn stickyBtn">
            Aggiungi sezione
          </button>

          <button className="btn btn-primary rounded-pill stickyBtn">
            Disponibile per
          </button>
        </div>
      </div>
    </div>
  );
};
