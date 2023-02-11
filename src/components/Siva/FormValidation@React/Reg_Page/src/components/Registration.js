// import "./styles.css";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";

import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Validate from "../Validation";

const SignUp = () => {
  const initialValues = { name: "", email: "", password: "", Dob: "", cpwd: "", city: "", phonenumber: "", AlternatePhonenumber: "", Streetaddress: "", ID: "", State: "", Companyname: "", PIN: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(Validate(formValues));
    setIsSubmit(true);
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      navigate("/welcome")
    }
  }, [formErrors]);
  return (
    <div className="signup-page">
      <div className="sign-main">
        <div className="sign-up">
          <h2>Registre Here</h2>

          <div className="signup-btns">
            <form onSubmit={handleSubmit} autoComplete="off">
              <div className="form-in row">
                <div className="form-ctn col-6 form-in">
                  <label>Name</label>
                  <input type="text" name="name" id="name" value={formValues.name} onChange={handleChange} />
                  {formErrors.name && (
                    <span className="error">{formErrors.name}</span>
                  )}
                </div>

                <div className="form-ctn col-6 form-in">
                  <label>Email</label>
                  <input type="text" name="email" id="email" value={formValues.email} onChange={handleChange} />
                  {formErrors.email && (
                    <span className="error">{formErrors.email}</span>
                  )}
                </div>

                <div className="form-in ">
                  <label>Phonenumber</label>
                  <input type="number" name="phonenumber" id="phonenumber" value={formValues.phonenumber} onChange={handleChange} />
                  {formErrors.phonenumber && (
                    <span className="error">{formErrors.phonenumber}</span>
                  )}
                </div>

                <div className="form-in">
                  <label>Alternate Phonenumber</label>
                  <input type="number" name="AlternatePhonenumber" id="AlternatePhonenumber" value={formValues.AlternatePhonenumber} onChange={handleChange} />
                  {formErrors.AlternatePhonenumber && (
                    <span className="error">
                      {formErrors.AlternatePhonenumber}
                    </span>
                  )}
                </div>

                <div className="form-in">
                  <label>Street address</label>
                  <input type="text" name="Streetaddress" id="Streetaddress" value={formValues.Streetaddress} onChange={handleChange} />
                  {formErrors.Streetaddress && (
                    <span className="error">{formErrors.Streetaddress}</span>
                  )}
                </div>

                <div className="form-in">
                  <label>City</label>
                  <input type="text" name="city" id="city" value={formValues.city} onChange={handleChange} />
                  {formErrors.city && (
                    <span className="error">{formErrors.city}</span>
                  )}
                </div>

                <div className="form-in">
                  <label>State</label>
                  <input type="text" name="State" id="State" value={formValues.State} onChange={handleChange} />
                  {formErrors.State && (
                    <span className="error">{formErrors.State}</span>
                  )}
                </div>

                <div className="form-in">
                  <label>Pincode</label>
                  <input type="text" name="PIN" id="PIN" value={formValues.PIN} onChange={handleChange} />
                  {formErrors.PIN && (
                    <span className="error">{formErrors.PIN}</span>
                  )}
                </div>

                <div className="form-in">
                  <label>Dob</label>
                  <input type="date" name="Dob" id="Dob" value={formValues.Dob} onChange={handleChange} />
                  {formErrors.Dob && (
                    <span className="error">{formErrors.Dob}</span>
                  )}
                </div>

                <div className="form-in">
                  <label>Company Name</label>
                  <input type="text" name="Companyname" id="Companyname" value={formValues.Companyname} onChange={handleChange} />
                  {formErrors.Companyname && (
                    <span className="error">{formErrors.Companyname}</span>
                  )}
                </div>

                <div className="form-in">
                  <label>ID cardnumber</label>
                  <input type="text" name="ID" id="ID" value={formValues.ID} onChange={handleChange} />
                  {formErrors.ID && (
                    <span className="error">{formErrors.ID}</span>
                  )}
                </div>

                <div className="form-in">
                  <label>Password</label>
                  <input type="password" name="password" id="password" value={formValues.password} onChange={handleChange} />
                  {formErrors.password && (
                    <span className="error">{formErrors.password}</span>
                  )}
                </div>

                <div className="form-in">
                  <label>Confirm password</label>
                  <input type="password" name="cpwd" id="cpwd" value={formValues.cpwd} onChange={handleChange} />
                  {formErrors.cpwd && (
                    <span className="error">
                      {formErrors.cpwd}
                    </span>
                  )}
                </div>
              </div>

              <Button className="sign-btn" type="submit">
                submit
                <BsArrowRight />
              </Button>
            </form>
          </div>
        </div>
        {/* <div className="signup-img">
          <img
            src="https://thumbs.dreamstime.com/b/space-shuttle-booster-rocket-rockets-propel-spaceship-outer-space-to-explore-cosmos-universe-113959295.jpg"
            alt="rocket"
            width="284px"
            height="523px"
          />
        </div> */}
      </div>
    </div>
  );
};
export default SignUp;
