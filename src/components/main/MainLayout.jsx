import HeroCard from "./mainsection/herocard/HeroCard"
import RecommendedForYou from "./mainsection/recommendedForYou/RecommendedForYou";
import Analysis from "./mainsection/analysis/Analysis";



const Main = () => {
  return (
    <section className="d-flex flex-column gap-2">
      <HeroCard />

      <RecommendedForYou />

      <Analysis />

      
    </section>
  );
};

export default Main;
