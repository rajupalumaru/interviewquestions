import React, { useState } from 'react'

const OnChange = () => {
    const [user,setUser]=useState("");
    const handleChange=(e)=>{
          setUser(e.target.value)
    }
  return (
    <div>
      <input type="text" placeholder='search products' value="user" onChange={handleChange}/>
      {user}
    </div>
  )
}

export default OnChange
