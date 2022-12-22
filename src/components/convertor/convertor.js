import React, { useState } from 'react';


const Convertor = () => {
    const [data, setData] = useState();

    const handlechange = () => {

    }

    return (
        <div>
            <p>Indian Rupees</p>
            <input type="" onChange={handlechange} />
            <button>Submit</button>
        </div>
    )
}
export default Convertor;