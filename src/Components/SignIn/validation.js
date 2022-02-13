const Validation = (values) => {
  let errors = {};
  //For mail
  if (!values.mail) {
    errors.mail = "Eamil is required.";
  } else if (!/\S+@\S+\.\S+/.test(values.mail)) {
    errors.mail = "Email is invalid.";
  }

  //for password
  if (!values.password) {
    errors.password = "Password is required.";
  } else if (values.password.length < 6) {
    errors.password = "Password must be more than 6 characters";
  }

  return errors;
};

export default Validation;
