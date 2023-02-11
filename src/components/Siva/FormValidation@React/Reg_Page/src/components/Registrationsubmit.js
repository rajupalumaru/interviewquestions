import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className=" welcome row justify-content-center align-items-center">
      <p style={{textAlign: "center"}}>Form successfully submitted</p>
      <Button className="log_btn" variant="dark" onClick={logout}>Logout</Button>
    </div>
  );
};
export default Welcome;
