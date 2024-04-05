export const validateName = (value) => {
  let error;
  if (!value) {
    error = "Username should contain 2-60 characters";
  } else if (!/^[aA-zZ]{2,60}$/i.test(value)) {
    error = "Username should contain 2-60 characters";
  }
  return error;
};

export const validateEmail = (value) => {
  let error;
  if (!value) {
    error = "User email, must be a valid email according to RFC2822";
  } else if (
    !/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i.test(
      value
    )
  ) {
    error = "User email, must be a valid email according to RFC2822";
  }
  return error;
};

export const validatePhone = (value) => {
  let error;
  if (!value) {
    error = "38 (XXX) XXX - XX - XX";
  } else if (value.length > 13) {
    error = "Too many numbers";
  } else if (!/[\+]{0,1}380([0-9]{9})$/i.test(value)) {
    error = "Number should start with code of Ukraine +380";
  }
  return error;
};

export const validatePosition = (value) => {
  let error;
  if (!value) {
    error = "Please, select your position";
  }
  return error;
};

export const validatePhoto = (value) => {
  let error;

  if (!value) {
    error = "Please select an image.";
  } else if (value.size > 5 * 1024 * 1024) {
    error = "Selected image should be less than 5 MB.";
  }

  return error;
};
