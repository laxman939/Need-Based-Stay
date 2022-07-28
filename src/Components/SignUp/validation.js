const ValidationForSignup = (values) => {
  let errors = {};

  // firstName
  if (!values.firstName) {
    errors.firstName = "Name is required.";
  }

  // lastName
  if (!values.lastName) {
    errors.lastName = "Name is required.";
  }
  // userName
  if (!values.userName) {
    errors.userName = "Name is required.";
  }
  // phone
  if (!values.phoneNumber) {
    errors.phoneNumber = "Name is required.";
  }

  // Mail
  if (!values.emailId) {
    errors.emailId = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(values.emailId)) {
    errors.emailId = "Email is invalid.";
  }

  // Password
  if (!values.signUpPswrd) {
    errors.signUpPswrd = "Password is required.";
  } else if (values.signUpPswrd.length < 6) {
    errors.signUpPswrd = "Password must be more than 6 characters";
  }

  return errors;
};

export default ValidationForSignup;
