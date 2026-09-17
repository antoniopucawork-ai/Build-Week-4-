import { useProfile } from "../../../../api/useProfile";
import "./HeroCard.css";
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
        <img
          className="hero-profile-img"
          src={profile.image}
          alt={`${profile.name} ${profile.surname}`}
        />
      </div>

      <div className="hero-content">
        <h2>
          {profile.name} {profile.surname}
        </h2>

        <p>{profile.title}</p>
        <p>{profile.bio}</p>
        <p>{profile.area}</p>
      </div>
    </div>
  );
};

export default HeroCard;
