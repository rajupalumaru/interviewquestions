import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Axios = () => {
    const [data,setdata]=useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(response => setdata(response.data))
    }, [])
    return (
        <div>
           {data.map((item)=>{
            return(<p key={item.id}>{item.title}</p>)
           })}
        </div>
    )
}

export default Axios
