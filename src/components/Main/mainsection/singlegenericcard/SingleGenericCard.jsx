import LinkedinButton from "../../../reusable/buttons/LinkedinButton";
import { BUTTON_VARIANT } from "../../../reusable/buttons/buttonVariants";
import "./SingleGenericCard.css";

const SingleGenericCard = ({
  icon,
  title,
  description,
  date,
  details,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="experience-card">
      {icon && (
        <div className="experience-icon">
          <img src={icon} alt="" />
        </div>
      )}

      <div className="experience-content">
        <div className="experience-title-row">
          <h3>{title}</h3>

          <div className="experience-actions">
            {onEdit && (
              <LinkedinButton
                customVariant={BUTTON_VARIANT.ICON_ONLY.EDIT}
                onClick={onEdit}
              />
            )}

            {onDelete && (
              <LinkedinButton
                customVariant={BUTTON_VARIANT.ICON_ONLY.DELETE}
                onClick={onDelete}
              />
            )}
          </div>
        </div>

        <p className="experience-description">
          {description}
        </p>

        <span className="experience-date">
          {date}
        </span>

        <p className="experience-details">
          {details}
        </p>
      </div>
    </div>
  );
};

export default SingleGenericCard;