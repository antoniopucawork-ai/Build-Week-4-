import "./SingleGenericCard.css";



const SingleGenericCard = ({
  icon,
  title,
  description,
  date,
  details,
}) => {
  return (
    <div className="experience-card">
      <div className="experience-icon">
        <img src={icon} alt="" />
      </div>

      <div className="experience-content">
        <h3>{title}</h3>
        <p className="experience-description">{description}</p>
        <span className="experience-date">{date}</span>
        <p className="experience-details">{details}</p>
      </div>
    </div>
  );
};

export default SingleGenericCard;

