import Controlled from "./components/controlled and Uncontrolled/controlled/Controlled";
import UnControlled from "./components/controlled and Uncontrolled/Uncontrolled/Uncontrolled";
import Hoc from "./components/HOC/Hoc";
import LoginPage from "./components/HOC/LoginPage";
import Search from "./components/Serach/Serach";

function App({ name }) {
  return (
    <div>
      {/* <h1>welcome User !! {name}</h1> */}
      <LoginPage />
    </div>
  );
}

export default Hoc(App);
