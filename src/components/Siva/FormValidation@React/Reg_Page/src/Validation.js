const Validate = (values) => {
  let errors = {};
  const regName = /^[a-zA-Z ]{2,30}$/;
  const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  var regularExpression = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  var num = /^([1-9][0-9])+$/;

  if (!values.name) {
    errors.name = "Name is required field";
  } else if (!regName.test(values.name)) {
    errors.name = "Please enter valid name";
  }

  if (!values.email) {
    errors.email = "Email is required field";
  } else if (!regex.test(values.email)) {
    errors.email = "Please enter valid email";
  }

  if (!values.password) {
    errors.password = "Password is required field";
  } else if (!regularExpression.test(values.password)) {
    errors.password = "pwd pattern mismatch";
  } else if (values.password.length < 8) {
    errors.password = "password must be more than 8 characters";
  }

  if (!values.cpwd) {
    errors.cpwd = "Confirmpassword is required field";
  } else if (values.password !== values.cpwd) {
    errors.cpwd = "pwd & cpwd mismatch";
  } else if (values.cpwd.length < 8) {
    errors.cpwd = "password must be more than 8 characters";
  }


  if (!values.phonenumber) {
    errors.phonenumber = "phonenumber is required field";
  } else if (!num.test(values.phonenumber)) {
    errors.phonenumber = "please enter valid number";
  } else if (values.phonenumber.length !== 10) {
    errors.phonenumber = "Enter valid number";
  }

  if (!values.AlternatePhonenumber) {
    errors.AlternatePhonenumber = "phonenumber is required field";
  } else if (!num.test(values.AlternatePhonenumber)) {
    errors.AlternatePhonenumber = "please enter valid number";
  } else if (values.AlternatePhonenumber.length !== 10) {
    errors.AlternatePhonenumber = "Enter valid number";
  }
  // pincode
  if (!values.PIN) {
    errors.PIN = "Pin is required field";
  } else if (!num.test(values.PIN)) {
    errors.PIN = "Enter valid Pin";
  } else if (values.PIN.length < 6) {
    errors.PIN = "Enter valid Pin";
  }

  if (!values.Streetaddress) {
    errors.Streetaddress = "Invalid enter address";
  }

  if (!values.city) {
    errors.city = "Please enter required fields";
  }

  if (!values.State) {
    errors.State = "Please enter required fields";
  }


  if (!values.Dob) {
    errors.Dob = "Please enter required fields";
  }


  if (!values.Companyname) {
    errors.Companyname = "Please enter required fields";
  }

  if (!values.ID) {
    errors.ID = "Please enter required fields";
  }

  return errors;
};
export default Validate;
