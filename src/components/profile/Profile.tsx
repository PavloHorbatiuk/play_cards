import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../../store/state'

function Profile() {
    const IsloggedIn = useAppSelector(state => state.login)
    if (!IsloggedIn.isLoggedIn) {
        return <Navigate to='/login' />
    }
    return (
        <div><h1>Profile</h1></div>
    )
}

export default Profile