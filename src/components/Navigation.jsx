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

    const handlePurchases = () => {
        navigate('/purchases')
    }

    return (
        <nav className='nav'>
            <div className="nav__title">
                <strong onClick={handleHome}>e-commerce</strong>
            </div>
            <ul className='list__items'>
                <li className='item-icon' onClick={handleLogin}>
                    <i className='bx bx-user icon' ></i>
                </li>
                <li className='item-icon' onClick={handlePurchases}>
                    <i className='bx bx-box icon' ></i>
                </li>
                <li className='item-icon'>
                    <i className='bx bx-cart icon' ></i>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation