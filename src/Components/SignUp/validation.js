const ValidationForSignup = (values) => {
  let errors = {};

  if (!values.signupName) {
    errors.signupName = "Name is required.";
  }

  if (!values.signupMail) {
    errors.signupMail = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(values.signupMail)) {
    errors.signupMail = "Email is invalid.";
  }

  if (!values.signupPswrd) {
    errors.signupPswrd = "Password is required.";
  } else if (values.signupPswrd.length < 6) {
    errors.signupPswrd = "Password must be more than 6 characters";
  }

  if (!values.signupCPswrd) {
    errors.signupCPswrd = "Password is required.";
  } else if (values.signupCPswrd.length < 6) {
    errors.signupCPswrd = "Password must be more than 6 characters";
  } else if (values.signupCPswrd !== values.signupPswrd) {
    errors.signupCPswrd = "Password and Confirm password must be same";
  } else if (values.signupCPswrd.length !== values.signupPswrd.length) {
    errors.signupCPswrd = "Password and Confirm password must be same";
  }
  return errors;
};

export default ValidationForSignup;
