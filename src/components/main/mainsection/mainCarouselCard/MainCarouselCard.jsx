import "./MainCarouselCard.css";
import { Plus, Pencil } from "lucide-react";

const MainCarouselCard = () => {
  return (
    <section className="main-carousel-card">
      <div className="main-carousel-header">
        <h2>In primo piano</h2>

        <div className="main-carousel-actions">
          <Plus size={24} />
          <Pencil size={20} />
        </div>
      </div>
    </section>
  );
};

export default MainCarouselCard;
