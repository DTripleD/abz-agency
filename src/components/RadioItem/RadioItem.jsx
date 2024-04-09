import { Field } from "formik";
import PropTypes from "prop-types";

import css from "./RadioItem.module.scss";

const RadioItem = ({ position, position_id, setFieldValue, validate }) => {
  return (
    <li className={css.radioItem}>
      <Field
        type="radio"
        name="position"
        arial-label={`${position} option`}
        id={position_id}
        className={css.radioInput}
        value={position_id}
        validate={validate}
        onChange={() => setFieldValue("position", position_id)}
      />
      <label htmlFor={position_id} className={css.radioLabel}>
        {position}
      </label>
    </li>
  );
};

export default RadioItem;

RadioItem.propTypes = {
  position: PropTypes.string,
  position_id: PropTypes.number,
  setFieldValue: PropTypes.func,
  validate: PropTypes.func,
};
