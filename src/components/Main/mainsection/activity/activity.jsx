import "./activity.css";
import LinkedinButton from "../../../reusable/buttons/LinkedinButton";
import { BUTTON_VARIANT } from "../../../reusable/buttons/buttonVariants";

/* 
aggiustato anche qui, come l'aside
*/
const Activity = ({ profile }) => {

  const posts = [
    {
      id: 1,
      text: "Sto lavorando a nuovi progetti e continuando il mio percorso nel web development.",
    },
    {
      id: 2,
      text: "Ogni progetto è un'occasione per imparare qualcosa di nuovo e migliorare.",
    },
    {
      id: 3,
      text: "Nuove competenze, nuove sfide e tanta voglia di crescere.",
    },
  ];

  return (
    <section className="activity">
      <div className="activity-header">
        <div>
          <h2>Attività</h2>
          <p className="activity-followers">184 follower</p>
        </div>

        <div className="activity-actions">
          <LinkedinButton customVariant={BUTTON_VARIANT.MAIN.CREATE} />

          <LinkedinButton
            customVariant={BUTTON_VARIANT.ICON_ONLY.EDIT}
            aria-label="Modifica attività"
          />
        </div>
      </div>

      <div className="activity-posts">
        {posts.map((post) => (
          <article className="activity-post" key={post.id}>
            <div className="activity-post-author">
              <img
                src={profile?.image}
                alt={`${profile?.name} ${profile?.surname}`}
              />

              <div>
                <p className="activity-post-name">
                  {profile?.name} {profile?.surname}
                </p>

                <span>1 settimana</span>
              </div>
            </div>

            <p className="activity-post-text">{post.text}</p>
          </article>
        ))}
      </div>
      <button type="button" className="activity-show-all">
        Mostra tutti i post →
      </button>
    </section>
  );
};

export default Activity;
