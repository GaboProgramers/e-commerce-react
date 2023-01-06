import React from 'react'
import { useDispatch } from 'react-redux'
import { ascendingOrderProducts, descendingOrderPRoducts } from '../../store/slices/products.slice'
import './style/toOrderProducts.css'

const ToOrderProducts = () => {
    const dispatch = useDispatch()

    const handleAscending = () => {
        dispatch(ascendingOrderProducts())
    }

    const handleDescending = () => {
        dispatch(descendingOrderPRoducts())
    }
    return (
        <div className='order__container'>
            <button className='order__btn ascending' onClick={handleAscending}>Ascending Price</button>
            <button className='order__btn descending' onClick={handleDescending}>Descending Price</button>
        </div>
    )
}

export default ToOrderProducts