import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/navigation.css'

const Navigation = () => {
    const navigate = useNavigate()

    const handleLogin = () => {
        navigate('/login')
    }

    const handleHome = () => {
        navigate('/')
    }

    return (
        <nav className='nav'>
            <div className="nav__title">
                <strong onClick={handleHome}>e-commerce</strong>
            </div>
            <ul className='list__items'>
                <li className='item-icon' onClick={handleLogin}>
                    <i className='bx bx-user' ></i>
                </li>
                <li className='item-icon'>
                    <i className='bx bx-box' ></i>
                </li>
                <li className='item-icon'>
                    <i className='bx bx-cart' ></i>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation