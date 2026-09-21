import { useState } from "react";
import "./css/LinkedinButton.css";
import { BUTTON_VARIANT } from "./buttonVariants";
import { useNavigate } from "react-router-dom";

const LinkedinButton = ({
  customVariant,
  variant,
  iconOnly = false,
  onClick,
  profileId,
  disabled = false,
  size = "md",
  className = "",
  ...props
}) => {
  const navigate = useNavigate();
  const [stateButton, setStateButton] = useState("IDLE");
  const actionType = customVariant?.actionType;

  let currentConfig = customVariant;

  if (actionType === "FOLLOW") {
    currentConfig =
      stateButton === "FOLLOWED"
        ? BUTTON_VARIANT.MAIN.FOLLOWED
        : BUTTON_VARIANT.ASIDE.FOLLOW;
  } else if (actionType === "CONNECT") {
    if (stateButton === "PENDING") {
      currentConfig = BUTTON_VARIANT.MAIN.PENDING_CONNECTION;
    } else if (stateButton === "CONNECTED") {
      currentConfig = BUTTON_VARIANT.MAIN.CONNECTED;
    } else {
      currentConfig = BUTTON_VARIANT.ASIDE.CONNECT;
    }
  }

  const {
    icon: Icon,
    label: labelText,
    variant: configVariant,
  } = currentConfig || {};

  const activeVariant = variant || configVariant || "primary";
  const isIconOnly = iconOnly || !labelText;

  const handleLabelClick = (event) => {
    if (actionType === "FOLLOW") {
      setStateButton((previousState) =>
        previousState === "IDLE" ? "FOLLOWED" : "IDLE",
      );
    } else if (actionType === "CONNECT") {
      setStateButton((previousState) => {
        if (previousState === "IDLE") return "PENDING";
        if (previousState === "PENDING") return "CONNECTED";

        return "IDLE";
      });
    } else if (onClick) {
      onClick(event);
    } else if (profileId) {
      navigate(`/profile/${profileId}`);
    }
  };

  return (
    <button
      type="button"
      className={`btn-linkedin btn-${activeVariant} btn-${size} ${
        isIconOnly ? "btn-icon-only-base" : ""
      } ${className}`}
      onClick={handleLabelClick}
      disabled={disabled}
      {...props}
    >
      {Icon && <Icon className="btn-icon" size={18} />}
      {!isIconOnly && labelText && (
        <span className="btn-label">{labelText}</span>
      )}
    </button>
  );
};

export default LinkedinButton;
