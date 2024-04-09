import { useEffect } from "react";
import toast from "react-hot-toast";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import css from "./FormSection.module.scss";
import Loader from "components/Loader/Loader";
import Button from "components/Button/Button";
import InputField from "components/InputField/InputField";
import RadioField from "components/RadioField/RadioField";
import ImageField from "components/ImageField/ImageField";

import icons from "/images/icons.svg";

import {
  validateEmail,
  validateName,
  validatePhone,
} from "src/validation/validation";

import { setPage } from "src/redux/users/usersSlice";
import { postUser, getUsers } from "src/redux/users/usersOperations";
import { getPositions } from "src/redux/positions/positionsOperations";
import { selectIsPosting, selectIsSent } from "src/redux/users/usersSelectors";

const FormSection = () => {
  const dispatch = useDispatch();

  const isSent = useSelector(selectIsSent);
  const isPosting = useSelector(selectIsPosting);

  useEffect(() => {
    dispatch(getPositions());
  }, [dispatch]);

  useEffect(() => {
    if (isSent) {
      dispatch(setPage(1));
      dispatch(getUsers(1));
    }
  }, [dispatch, isSent]);

  const onFormSubmit = (values) => {
    const formData = new FormData();

    formData.append("name", values.name);
    formData.append("position_id", values.position);
    formData.append("phone", values.phone);
    formData.append("email", values.email.toLowerCase());
    formData.append("photo", values.photo);

    dispatch(postUser(formData)).then((data) => {
      if (data.payload.status === 409) {
        toast.error(data.payload.data.message);
      } else {
        toast.success(data.payload.message);
      }
    });
  };

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    position: 1,
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
                {isPosting ? (
                  <Loader />
                ) : (
                  <Button text="Submit" type="submit" isValid={isValid} />
                )}
              </Form>
            )}
          </Formik>
        )}
      </div>
    </section>
  );
};

export default FormSection;
