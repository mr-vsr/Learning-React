import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const { user } = useContext(UserContext)// Here again we have a const user which is again from the user provider 
    //There we had children as jsx which nothing but this thing down here which will be rendered if the mentioned conditions are met.

    if (!user) return <div>please login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile