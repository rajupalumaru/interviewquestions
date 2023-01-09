import { useState } from "react";
import Axios from "./components/Axios/Axios";
import Calculator from "./components/Calculator/Calculator";
import ABC from "./components/CSS/css";
import Fetch from "./components/Fetch/Fetch";
import Index from "./components/Login";
import Login from "./components/Login/Login";
import Routing from "./components/Routing/Routing";
import Seachable from "./components/Seachable/Seachable";
import IndexSign from "./components/Signup/IndexSign";
import SignUp from "./components/Signup/SignUp";
import UseEffects from "./components/UseEffectAndUseMemo/useEffect/useEffects";
import firebase from "./firebase";
function App() {
  
  return (
    <div>
    <Routing/>
    </div>
  );
}
export default App;
