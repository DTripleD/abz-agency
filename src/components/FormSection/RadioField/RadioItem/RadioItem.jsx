import { Field } from "formik";
import PropTypes from "prop-types";

import css from "./RadionItem.module.scss";

const RadioItem = ({ position, position_id, setFieldValue, validate }) => {
  return (
    <div className={css.radioItem}>
      <Field
        type="radio"
        name="position"
        id={position_id}
        className="radio"
        value={position_id}
        validate={validate}
        onChange={() => setFieldValue("position", position_id)}
      />
      <label htmlFor={position_id}>{position}</label>
    </div>
  );
};

export default RadioItem;

RadioItem.propTypes = {
  position: PropTypes.string,
  position_id: PropTypes.number,
  setFieldValue: PropTypes.func,
  validate: PropTypes.func,
};
