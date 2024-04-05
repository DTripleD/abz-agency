import css from "./Button.module.scss";
import PropTypes from "prop-types";

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
