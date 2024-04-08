import { ErrorMessage, Field } from "formik";

import css from "./InputField.module.scss";

import PropTypes from "prop-types";

const InputField = ({ errors, touched, validate, label, name, type }) => {
  return (
    <div className={css.inputBlock}>
      <Field
        type={type}
        name={name}
        className={`${css.inputField} ${
          errors[name] && touched[name] ? css.falseValidate : ``
        }`}
        validate={validate}
        placeholder=" "
      />
      <label
        htmlFor={name}
        className={`${css.inputLabel} ${
          errors[name] && touched[name] ? css.falseValidate : ``
        }`}
      >
        {label}
      </label>
      {name === "phone" && !touched.phone && (
        <div className={css.helperText}>+38 (XXX) XXX - XX - XX</div>
      )}
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
