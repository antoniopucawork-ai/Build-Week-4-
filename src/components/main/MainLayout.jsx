import HeroCard from "./mainsection/herocard/HeroCard";
import RecommendedForYou from "./mainsection/recommendedForYou/RecommendedForYou";
import Analysis from "./mainsection/analysis/Analysis";
import Information from "./mainsection/information/Information";
import MainCarouselCard from "./mainsection/mainCarouselCard/MainCarouselCard";
import MainGenericCard from "./mainsection/MainGenericCard/MainGenericCard";

const Main = () => {
  return (
    <section className="d-flex flex-column gap-2">
      <HeroCard />

      <RecommendedForYou />

      <Analysis />

      <Information />

      <MainCarouselCard />

      <MainGenericCard title="Esperienza" />
      <MainGenericCard title="Formazione" />
      <MainGenericCard title="Licenze e certificazioni" />
      <MainGenericCard title="Progetti" />
      <MainGenericCard title="Lingue" />
    </section>
  );
};

export default Main;
