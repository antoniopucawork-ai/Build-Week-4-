import HeroCard from "./mainsection/herocard/HeroCard";
import RecommendedForYou from "./mainsection/recommendedForYou/RecommendedForYou";
import Analysis from "./mainsection/analysis/Analysis";
import Information from "./mainsection/information/Information";
import MainCarouselCard from "./mainsection/mainCarouselCard/MainCarouselCard";
import Activity from "./mainsection/activity/activity";

const Main = () => {
  return (
    <section className="d-flex flex-column gap-2">
      <HeroCard />

      <RecommendedForYou />

      <Analysis />

      <Information />

      <MainCarouselCard />

      <Activity />
    </section>
  );
};

export default Main;
