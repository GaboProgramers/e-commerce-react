import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtecterRoutes = () => {
    if (localStorage.getItem('token')) {
        return <Outlet />
    } else {
        return <Navigate to='/login' />
    }
}

export default ProtecterRoutes