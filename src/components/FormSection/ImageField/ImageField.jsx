import { ErrorMessage, Field } from "formik";
import css from "./ImageField.module.scss";
import { validatePhoto } from "src/validation/validation";
import PropTypes from "prop-types";

const ImageField = ({ errors, touched, setFieldValue, values }) => {
  return (
    <div
      className={`${css.imageBlock} ${
        errors.photo && touched.photo ? css.falseValidate : ``
      }`}
    >
      <label>
        <Field
          type="file"
          name="photo"
          accept="image/jpeg"
          value=""
          validate={validatePhoto}
          onChange={(event) => {
            const file = event.currentTarget.files[0];
            setFieldValue("photo", file);
          }}
        />
        <div className={css.buttonFile}>Upload</div>
        <span className={css.fileText}>
          {!values.photo.name ? "Upload your photo" : values.photo.name}
        </span>
        <ErrorMessage
          name="photo"
          component="div"
          className={css.errorMessage}
        />
      </label>
    </div>
  );
};

export default ImageField;

ImageField.propTypes = {
  errors: PropTypes.object,
  touched: PropTypes.object,
  setFieldValue: PropTypes.func,
  values: PropTypes.object,
};
