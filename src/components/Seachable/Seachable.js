import React, { useState } from 'react';


const Seachable = () => {
   const [value,setValue]=useState([]);

    const onChange = (e) => {
       console.log(e.target.value);
        setValue(e.target.value)
    }

    return (
        <div>
            <input type='text' placeholder='search products' onChange={onChange} />
            <select>
                <option value={value}>{value}</option>
                <option value={value} disabled>200</option>
                <option value={value} disabled>300</option>
            </select>
        </div>
    )
}
export default Seachable;