import "./HeroCard.css";
import { useEffect, useState } from "react";
const HeroCard = () => {
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProfile(data);
      })
      .catch((error) => {
        console.log("Errore:", error);
      });
  }, []);
  if (!profile) {
    return <p>Caricamento profilo...</p>;
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
