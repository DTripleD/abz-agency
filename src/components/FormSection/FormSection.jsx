import Button from "components/Button/Button";

import css from "./FormSection.module.scss";
import { ErrorMessage, Field, Form, Formik } from "formik";
import RadioItem from "../RadioItem/RadioItem";
import {
  validateEmail,
  validateName,
  validatePhone,
  validatePhoto,
  validatePosition,
} from "../../validation/validation";
import InputField from "../InputField/InputField";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPositions } from "../../redux/positions/positionsSelectors";
import { getPositions } from "../../redux/positions/positionsOperations";

const FormSection = () => {
  const dispatch = useDispatch();

  const positions = useSelector(selectPositions);

  useEffect(() => {
    dispatch(getPositions());
  }, [dispatch]);

  return (
    <section className={`${css.section} ${css.formSection}`}>
      <div className={`${css.container} ${css.secondaryContainer}`}>
        <h2 className={css.title}>Working with POST request</h2>
        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            position: "",
            photo: "",
          }}
          onSubmit={(values) => {
            // const formData = new FormData();
            // formData.append("name", values.name);
            // formData.append("position_id", values.position);
            // formData.append("phone", values.phone);
            // formData.append("email", values.email);
            // formData.append("photo", values.photo);
            // dispatch(postUser(formData));
          }}
        >
          {({ values, errors, touched, isValid, setFieldValue }) => (
            <Form className={css.form}>
              <InputField
                errors={errors}
                touched={touched}
                validate={validateName}
                label="Name"
                name="name"
                type="text"
              />

              {console.log(isValid)}

              <InputField
                errors={errors}
                touched={touched}
                validate={validateEmail}
                label="Email"
                name="email"
                type="email"
              />

              <InputField
                errors={errors}
                touched={touched}
                validate={validatePhone}
                label="Phone"
                name="phone"
                type="tel"
              />

              <div
                className={`radio-block ${
                  errors.position && touched.position ? css.falseValidate : ``
                }`}
              >
                <p>Select your position </p>
                {positions &&
                  positions.map((item) => (
                    <RadioItem
                      key={item.id}
                      position={item.name}
                      position_id={item.id}
                      setFieldValue={setFieldValue}
                      validate={validatePosition}
                      required
                    />
                  ))}
                <ErrorMessage
                  name="position"
                  className={css.errorMessage}
                  component="div"
                />
              </div>
              <div
                className={`${css.imageBlock} ${
                  errors.photo && touched.photo ? css.falseValidate : ``
                }`}
              >
                <label htmlFor="file">
                  <Field
                    type="file"
                    id="photo"
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
                    {!values.photo.name
                      ? "Upload your photo"
                      : values.photo.name}
                  </span>
                  <ErrorMessage
                    name="photo"
                    component="div"
                    className={css.errorMessage}
                  />
                </label>
              </div>

              <Button text="Submit" type="submit" isValid={isValid} />
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default FormSection;
