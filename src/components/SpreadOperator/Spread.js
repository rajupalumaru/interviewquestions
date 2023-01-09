import React from 'react';

const Spread=()=>{
    const obj={
        name:"raju",
        salary:123,
        id:12
        }
        const res={...obj, id:34,salary:456,};
        console.log(res)
    return(
        <div>

        </div>
    )
}