import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/Registration";
import Welcome from "./components/Registrationsubmit";
import "./App.css";

const App = () => {
  return (
    <div className="app-main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
