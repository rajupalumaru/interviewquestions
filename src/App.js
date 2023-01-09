import { useState } from "react";
import ABC from "./components/CSS/css";
import Seachable from "./components/Seachable/Seachable";
import UseEffects from "./components/UseEffectAndUseMemo/useEffect/useEffects";
import firebase from "./firebase";
function App() {
  // const [data, setData] = useState({
  //   name: "",
  //   age: ""
  // })
  // const HandleChange = e => {
  //   setData({...data,[e.target.name]: e.target.value });
  // }
  // const submitHandler = e => {
  // fetch(
  //     'https://test-api-e02db-default-rtdb.firebaseio.com/blogs.json',
  //     {
  //       method: 'POST',
  //       body: JSON.stringify(data), // you need to stringify this yourself
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     }
  //   ).then(res => alert('data-posted')).catch(err => console.log(err))
    
  // }
  return (
    <div>
     {/* <Seachable/> */}
     <UseEffects/>
    </div>

    // <center>
    //   <form onSubmit={submitHandler}>
    //     <label>Name</label><br />
    //     <input type="text" name="name" onChange={HandleChange} /><br />
    //     <label>Age</label><br />
    //     <input type="text" age="age" onChange={HandleChange} /><br />
    //     <input type="submit" value="Post Data" />
    //   </form>
    // </center>

  );
}
export default App;
// export default Hoc(App);
