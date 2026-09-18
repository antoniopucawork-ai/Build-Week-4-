import HeroCard from "./mainsection/herocard/HeroCard";
import RecommendedForYou from "./mainsection/recommendedForYou/RecommendedForYou";
import Analysis from "./mainsection/analysis/Analysis";
import Information from "./mainsection/information/Information";
const Main = () => {
  return (
    <main className="d-flex flex-column gap-2">
      <HeroCard />

      <RecommendedForYou />

      <Analysis />
      <Information />
    </main>
  );
};

export default Main;
