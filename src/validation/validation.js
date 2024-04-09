export const validateName = (value) => {
  let error;
  if (!value || value.length < 2) {
    error = "Username should contain 2-60 characters";
  } else if (!/^[aA-zZ]{2,60}$/i.test(value)) {
    error = "Username should consist of English letters";
  }
  return error;
};

export const validateEmail = (value) => {
  let error;
  if (!value) {
    error = "User email, must be a valid email according to RFC2822";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
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
