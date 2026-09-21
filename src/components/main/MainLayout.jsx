import HeroCard from "./mainsection/herocard/HeroCard";
import RecommendedForYou from "./mainsection/recommendedForYou/RecommendedForYou";
import Analysis from "./mainsection/analysis/Analysis";
import Information from "./mainsection/information/Information";
import MainCarouselCard from "./mainsection/mainCarouselCard/MainCarouselCard";
import Activity from "./mainsection/activity/activity";
import MainGenericCard from "./mainsection/mainGenericCard/MainGenericCard";

{
  /* Ricevo dal componente Profile i dati del profilo,
    l'informazione che indica se è il profilo dell'utente autenticato
    e la funzione per aggiornare i dati del profilo. */
}
const Main = ({ profile, isOwnProfile, fetchProfile }) => {
  console.log("MAIN CARICATO");
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

      <MainGenericCard profile={profile} />
      <MainCarouselCard isOwnProfile={isOwnProfile} />

      <Activity profile={profile} />

    </section>
  );
};

export default Main;
