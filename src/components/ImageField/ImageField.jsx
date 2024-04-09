import PropTypes from "prop-types";
import { ErrorMessage, Field } from "formik";

import css from "./ImageField.module.scss";

import { validatePhoto } from "src/validation/validation";

const ImageField = ({ errors, touched, setFieldValue, values }) => {
  return (
    <div className={css.imagePicker}>
      <label className={css.imageLabel}>
        <Field
          type="file"
          name="photo"
          accept="image/jpeg"
          arial-label="Photo picker"
          value=""
          className={css.imageInput}
          validate={validatePhoto}
          onChange={(event) => {
            const file = event.currentTarget.files[0];
            setFieldValue("photo", file);
          }}
        />
        <div
          className={`${css.buttonFile} ${
            errors.photo && touched.photo ? css.falseValidate : ``
          }`}
        >
          Upload
        </div>
        <span
          className={`${css.fileText} ${
            errors.photo && touched.photo ? css.falseValidate : ``
          }`}
        >
          {!values.photo.name ? "Upload your photo" : values.photo.name}
        </span>
      </label>
      <ErrorMessage name="photo" component="div" className={css.errorMessage} />
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
