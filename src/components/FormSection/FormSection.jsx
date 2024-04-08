import Button from "components/Button/Button";

import icons from "src/images/icons.svg";

import css from "./FormSection.module.scss";
import { Form, Formik } from "formik";
import {
  validateEmail,
  validateName,
  validatePhone,
} from "src/validation/validation";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPositions } from "src/redux/positions/positionsOperations";
import { postUser } from "src/redux/users/usersOperations";

import InputField from "./InputField/InputField";
import RadioField from "./RadioField/RadioField";
import ImageField from "./ImageField/ImageField";
import { selectIsSent } from "../../redux/users/usersSelectors";
import { getUsers } from "../../redux/users/usersOperations";

const FormSection = () => {
  const dispatch = useDispatch();

  const isSent = useSelector(selectIsSent);

  useEffect(() => {
    dispatch(getPositions());
  }, [dispatch]);

  useEffect(() => {
    if (isSent) {
      dispatch(getUsers(1));
    }
  }, [dispatch, isSent]);

  const onFormSubmit = (values) => {
    const formData = new FormData();

    formData.append("name", values.name);
    formData.append("position_id", values.position);
    formData.append("phone", values.phone);
    formData.append("email", values.email);
    formData.append("photo", values.photo);
    dispatch(postUser(formData));
  };

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    position: "",
    photo: "",
  };

  return (
    <section className={`${css.section} ${css.formSection}`} id="form">
      <div className={`${css.container} ${css.secondaryContainer}`}>
        <h2 className={css.title}>Working with POST request</h2>

        {isSent ? (
          <>
            <h3 className={css.title}>User successfully registered</h3>
            <svg className={css.successIcon}>
              <use href={icons + "#success-image"}></use>
            </svg>
          </>
        ) : (
          <Formik
            validateOnMount={true}
            initialValues={initialValues}
            onSubmit={onFormSubmit}
          >
            {({ values, errors, touched, isValid, setFieldValue }) => (
              <Form className={css.form}>
                <div className={css.inputsWrapper}>
                  <InputField
                    errors={errors}
                    touched={touched}
                    validate={validateName}
                    label="Name"
                    name="name"
                    type="text"
                  />
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
                </div>

                <RadioField setFieldValue={setFieldValue} />

                <ImageField
                  errors={errors}
                  touched={touched}
                  setFieldValue={setFieldValue}
                  values={values}
                />
                <Button text="Submit" type="submit" isValid={isValid} />
              </Form>
            )}
          </Formik>
        )}
      </div>
    </section>
  );
};

export default FormSection;
