import React, { useState } from 'react';
import Login from './Login';
import Logout from './logout';

const ConditonBase=()=>{
    const[isLogin,SetLogin]=useState(123);

    return(
        <>
        {isLogin===""?<button><Login/></button>:<button><Logout/></button>}
        </>
    )
}
export default ConditonBase;