import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')//This will be used to set the userName
    const [password, setPassword] = useState('')//This will be used to set the password

    const { setUser } = useContext(UserContext)//This is the way how we use the useContext hook and takes UserContext which we had created.
    //In the user context provider we had two states one of them was setUser so we are getting that method here.

    const handleSubmit = (e) => {//This is the function which will be handling the click event on submit button
        e.preventDefault()
        setUser({ username, password })//Here we are passing the variables username and password inside the setUser  method
        //We are using a useState inside which we have the setUser function and that is what we have passed inside the valuefield in the context provider wrapper. That function we are calling it here and setting the username
    }

    return (
        <div>
            <h2>Login</h2>
            <input type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='username' />
            {" "}
            <input type='text'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='password' />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login