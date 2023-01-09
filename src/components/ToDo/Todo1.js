import React from "react";
import { useState } from "react";

const Todo1 = () => {
  const [data, setData] = useState({ uname: "", phn: "" });
  const [nam, setNam] = useState([]);

  const handeleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    setNam([...nam, data]);
    console.log(data);
  };

  return (
    <div>
      <div>
        <h2>ToDo List</h2>
        <input
          type="text"
          name="uname"
          value={data.uname || " "}
          onChange={handeleChange}
        />
        <input
          type="number"
          name="phn"
          value={data.phn || " "}
          onChange={handeleChange}
        />
        <button onClick={handleClick}>submit</button>
        {nam &&
          nam.length > 0 &&
          nam.map((item, index) => {
            // console.log(item.uname)
            return (
              <>
                {console.log(item.uname)}
                {console.log(item.phn)}
                <p key={index}>
                  {item.uname}
                  {item.phn}
                  <button onClick="">Edit</button>
                </p>
              </>
            ); 
          })}
      </div>
    </div>
  );
};
export default Todo1;
