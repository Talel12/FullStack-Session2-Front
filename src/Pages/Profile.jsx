import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
    const user = useSelector(store=> store.auth.user)
  return (
    <div>
        <h1>User Profile</h1>
        <div>
            <p>Name: {user?.fullName}</p>
            <p>Email: {user?.username}</p>
            <p>Phone: {user?.phone}</p>
        </div>
    </div>
  )
}

export default Profile