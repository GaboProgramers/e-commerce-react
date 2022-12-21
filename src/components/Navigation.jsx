import React from 'react'
import './styles/navigation.css'

const Navigation = () => {
    return (
        <nav className='nav'>
            <div className="nav__title">
                <strong>e-commerce</strong>
            </div>
            <ul className='list__items'>
                <li className='item-icon'>
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