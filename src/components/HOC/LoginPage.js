import React from 'react'
import './Login.css'
const LoginPage = () => {
    const submitHandler = (e) => {
        e.preventDefault()
    }
    return (
        <div className='login_page'>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder='Enter UserName' /><br />
                <input placeholder='Enter Password' type='password' /><br />
                <button type='submit'>Add User</button>
            </form>
        </div>
    )
}
export default LoginPage;
