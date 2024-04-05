import { ErrorMessage, Field } from "formik";

import css from "./InputField.module.scss";

import PropTypes from "prop-types";

const InputField = ({ errors, touched, validate, label, name, type }) => {
  return (
    <div
      className={`${css.inputBlock} ${
        errors[name] && touched[name] ? css.falseValidate : ``
      }`}
    >
      <Field
        type={type}
        name={name}
        validate={validate}
        className="input-text"
        placeholder=" "
      />
      <label htmlFor={name}>{label}</label>
      <ErrorMessage name={name} component="div" className={css.errorMessage} />
    </div>
  );
};

export default InputField;

InputField.propTypes = {
  errors: PropTypes.object,
  touched: PropTypes.object,
  validate: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
};
