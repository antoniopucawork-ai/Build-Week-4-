import "./css/LinkedinButton.css";

const LinkedinButton = ({ customVariant, variant, iconOnly = false, onClick, disabled = false, size = "md", className = "", ...props }) => {
  const { icon: Icon, label: labelText, variant: configVariant } = customVariant || {};

  const activeVariant = variant || configVariant || "primary"
  const isIconOnly = iconOnly || !labelText;

  return (
    <button
      className={`btn-linkedin btn-${activeVariant} btn-${size} ${isIconOnly ? "btn-icon-only-base" : ""} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {Icon && <Icon className="btn-icon" size={18} />}
      {!isIconOnly && labelText && <span className="btn-label">{labelText}</span>}
    </button>
  );
};

export default LinkedinButton;
