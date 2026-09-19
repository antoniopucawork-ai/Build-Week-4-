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

      <div className="main-carousel-content">
        <article className="main-carousel-item">
          <p className="main-carousel-type">Link</p>

          <div className="main-carousel-image"></div>

          <div className="main-carousel-info">
            <h3>Portfolio GitHub</h3>
            <span>GitHub</span>

            <p>
              In questa sezione puoi trovare i miei progetti e il mio portfolio
              GitHub.
            </p>
          </div>
        </article>

        <article className="main-carousel-item">
          <p className="main-carousel-type">Link</p>

          <div className="main-carousel-image"></div>

          <div className="main-carousel-info">
            <h3>Portfolio personale</h3>
            <span>Portfolio</span>

            <p>
              Una raccolta dei progetti realizzati durante il mio percorso come
              Frontend Developer.
            </p>
          </div>
        </article>

        <article className="main-carousel-item">
          <p className="main-carousel-type">Link</p>

          <div className="main-carousel-image"></div>

          <div className="main-carousel-info">
            <h3>LinkedIn Clone</h3>
            <span>EPICODE</span>

            <p>Progetto React sviluppato in team durante la Build Week.</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default MainCarouselCard;
