import "./Information.css";
import { Pencil, Gem, ArrowRight } from "lucide-react";

const Information = ({ isOwnProfile }) => {
  return (
    <section className="information">
      <div className="information-header">
        <h2>Informazioni</h2>
        {/* isOwnProfileindica quale tipo di pagina profilo stai visualizzando e mostra l'icona solo se l'utente è autenticato (quindi la pagina profilo ), altrimenti la nasconde se l'utente ha solo l'id */}
        {isOwnProfile && <Pencil size={20} />}
      </div>

      <p className="information-description">
        Frontend Developer appassionato di sviluppo web e nuove tecnologie. Mi
        piace trasformare idee in interfacce semplici, funzionali e responsive,
        continuando a migliorare le mie competenze con React e JavaScript.
      </p>

      <div className="information-skills">
        <Gem size={24} />

        <div className="information-skills-content">
          <h3>Competenze principali</h3>
          <p>React • JavaScript • HTML • CSS</p>
        </div>

        <ArrowRight size={20} />
      </div>
    </section>
  );
};

export default Information;
