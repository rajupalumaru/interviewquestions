import axios from 'axios';
import React, { useState } from 'react'

const IndexSign = () => {
    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        confirmpassword: ""

    })
    const { username, email, password, confirmpassword } = data;

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })

    }

    const submitHanlder = (e) => {
        e.preventDefault();
        axios.post('https://teluguskill-610f0-default-rtdb.firebaseio.com/signin.json', data)
            .then(() => alert("submitted successfully"))

    }


    return (
        <div>
            <center>
                <form onSubmit={submitHanlder} >
                    <input type="text" name="username" value={username} onChange={changeHandler} /><br />
                    <input type="email" name="email" value={email} onChange={changeHandler} /><br />
                    <input type="password" name="password" value={password} onChange={changeHandler} /><br />
                    <input type="password" name="confirmpassword" value={confirmpassword} onChange={changeHandler} /><br />
                    {password !== confirmpassword ? <p style={{ color: "red" }}> password not matching</p> : null}
                    <input type="submit" name='submit' />
                </form>
            </center>

        </div>
    )
}

export default IndexSign
