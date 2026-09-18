import "./Adv.css"

const Adv = ({ user, sticky }) => {
  return (
    <div className={`advPremium  bg-light border p-2 text-center ${sticky ? "advSticky" : ""}`}>
      <div className="d-flex justify-content-end align-items-end">
        <span className="badge bg-light text-dark">Annuncio</span>
        <button className="btn btn-sm py-0">•••</button>
      </div>

      <p className="text-muted small">
        {user.name}, unlock your full potential with LinkedIn Premium
      </p>

      <div className="d-flex align-items-center justify-content-center gap-3">
        <img
          src={user.image}
          alt={user.name}
          className="rounded-circle"
          width={64}
          height={64}
        />

        <div className="d-flex align-items-center gap-1">
          <span className="li-nav__premium-icon"></span>
          <p className="fw-semibold my-2">Premium</p>
        </div>
      </div>

      <p className="mb-2 mt-2 p-3">See who's viewed your profile in the last 365 days</p>

      <button className="btn btn-outline-primary rounded-pill pe-3 ps-3">
        Try for free
      </button>
    </div>
  );
};

export default Adv;
