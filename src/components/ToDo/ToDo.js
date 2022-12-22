import React, { useEffect, useState } from 'react';

const ToDo = () => {
    const [data, setData] = useState({ uname: "" });
    const [nam, setNam] = useState([]);

    const handeleChange = (e) => {

        setData({ ...data, [e.target.name]: e.target.value });
    }
    const handleClick = (e) => {
        e.preventDefault();
        setNam([...nam, data]);
        console.log(data)
    }
    const Edit = (id) => {
        console.log("@@", id)
    }
    return (
        <div>
            <div>
                <h2>ToDo List</h2>
                <input type="text" name="uname" value={data.uname || " "} onChange={handeleChange} />
                <button onClick={handleClick}>submit</button>
                {nam && nam.length > 0 && nam.map((item, index) => {
                    // console.log(item.uname)
                    return (
                        <>
                            {console.log(item.uname)}
                            <p key={index}>{item.uname}<button onClick={(e) => Edit(index)}>Edit</button></p>
                        </>
                    )
                })}
            </div>
        </div>
    )
}
export default ToDo;