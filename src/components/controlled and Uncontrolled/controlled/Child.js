import React from 'react';

const Child=({handleChange})=>{

    return(
        <div>
            <input type='text' onChange={handleChange} />

        </div>
    )
}
export default Child;