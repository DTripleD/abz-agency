import { Field } from "formik";

const RadioItem = ({ position, position_id, setFieldValue, validate }) => {
  return (
    <div className="radio-item">
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
