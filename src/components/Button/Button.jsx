import PropTypes from "prop-types";

import css from "./Button.module.scss";

const Button = ({
  text,
  isLarge = false,
  type = "button",
  handleFunction,
  isValid = true,
}) => {
  return (
    <button
      type={type}
      aria-label={`${text} button`}
      disabled={!isValid}
      onClick={handleFunction}
      className={`${css.button} ${isLarge ? css.large : ""}`}
    >
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string,
  isLarge: PropTypes.bool,
  type: PropTypes.string,
  handleFunction: PropTypes.func,
  isValid: PropTypes.bool,
};
