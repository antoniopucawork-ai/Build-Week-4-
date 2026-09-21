import HeroCard from "./mainsection/herocard/HeroCard";
import RecommendedForYou from "./mainsection/recommendedForYou/RecommendedForYou";
import Analysis from "./mainsection/analysis/Analysis";
import Information from "./mainsection/information/Information";
import MainCarouselCard from "./mainsection/mainCarouselCard/MainCarouselCard";
import Activity from "./mainsection/activity/activity";
import ExperienceSection from "./mainsection/experiencesSection/ExperiencesSection";
import FormationSection from "./mainsection/formationSection/FormationSection";

{
  /* Ricevo dal componente Profile i dati del profilo,
    l'informazione che indica se è il profilo dell'utente autenticato
    e la funzione per aggiornare i dati del profilo. */
}
const Main = ({ profile, isOwnProfile, fetchProfile }) => {
  return (
    <section className="d-flex flex-column gap-2">
      {/* Queste sezioni sono visibili anche sugli altri profili,
          ma ricevono isOwnProfile per gestire le azioni riservate al proprietario. */}
      <HeroCard
        profile={profile}
        isOwnProfile={isOwnProfile}
        fetchProfile={fetchProfile}
      />

      {/* Queste sezioni sono visibili solo nel proprio profilo. */}
      {isOwnProfile && <RecommendedForYou />}

      {isOwnProfile && <Analysis />}

      {/* Queste sezioni sono visibili anche sugli altri profili,
          ma ricevono isOwnProfile per gestire le azioni riservate al proprietario. */}
      <Information isOwnProfile={isOwnProfile} />

      <MainCarouselCard isOwnProfile={isOwnProfile} />

      <Activity profile={profile} />

      <ExperienceSection userId={profile._id} isOwnProfile={isOwnProfile} />

      <FormationSection isOwnProfile={isOwnProfile} />
    </section>
  );
};

export default Main;
