const SideProfileCard = ({ profile, isLast, children, pageInfo, onProfileClick}) => {
  return (
    <div className={`p-3 ${isLast ? "" : "border-bottom mx-3 px-0"}`}>
      {pageInfo && (
        <div
          className="d-flex gap-2 mb-2"
          onClick={onProfileClick}
          style={{ cursor: onProfileClick ? "pointer" : "default" }}
        >
          <img
            src={pageInfo.logo}
            alt={pageInfo.name}
            width={48}
            height={48}
            className="rounded"
          />
          <div>
            <strong>{pageInfo.name}</strong>
            <p className="mb-0 text-muted small">{pageInfo.category}</p>
            <p className="mb-0 text-muted small">
              {pageInfo.followers} follower
            </p>
          </div>
        </div>
      )}

      <div className="d-flex gap-2">
        <img
          src={profile.image}
          alt={`${profile.name} ${profile.surname}`}
          width={pageInfo ? 20 : 50}
          height={pageInfo ? 20 : 50}
          className="rounded-circle"
          onClick={onProfileClick}
          style={{ cursor: onProfileClick ? "pointer" : "default" }}
        />

        {pageInfo ? (
          <p className="mb-0 text-muted small">
            {profile.name} e altri 21 collegamenti seguono questa pagina
          </p>
        ) : (
          <div>
            <strong
              onClick={onProfileClick}
              style={{ cursor: onProfileClick ? "pointer" : "default" }}
            >
              {profile.name} {profile.surname}
            </strong>
            <p className="mb-0 text-muted">{profile.title}</p>
            {children}
          </div>
        )}
      </div>

      {pageInfo && children}
    </div>
  );
};

export default SideProfileCard;
