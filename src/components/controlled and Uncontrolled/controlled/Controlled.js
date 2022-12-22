import React, { useState } from 'react';
import Child from './Child';


const Controlled =()=>{
    const [name,setName]=useState('');

    const handleChange=(e)=>{
        setName(e.target.value);
    }

    return(
        <center>
            Name:{name} <br/>
         <input type='text' onChange={handleChange} />
         <Child handleChange={handleChange}/>
        </center>
    )
}

export default Controlled;