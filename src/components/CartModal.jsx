import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import getConfig from '../utils/getConfig'
import './styles/cartModal.css'

const CartModal = ({ handleClose }) => {

    const [cartProducts, setCartProducts] = useState()

    useEffect(() => {
        const URL = 'https://e-commerce-api.academlo.tech/api/v1/cart'
        axios.get(URL, getConfig())
            .then(res => setCartProducts(res.data.data.cart.products))
            .catch(err => console.log(err))
    }, [])

    const checkout = () => {
        Navigate('/purchase')
        handleClose()
    }

    let total = 0;

    if (cartProducts?.length > 0) {
        if (cartProducts?.length > 1) {
            total = cartProducts?.reduce((initial, current) => {
                if (typeof initial === 'number') {
                    return initial + (current.price * current.productsInCart?.quantity)
                } else {
                    return (initial.price * initial.productsInCart?.quantity) + (current.price * current.productsInCart?.quantity)
                }
            });
        } else {
            total = cartProducts?.[0].price * cartProducts?.[0].productsInCart?.quantity
        }
    }

    return (
        <div className="cart">
            <div className='cart__list'>
                <h4 className='cart__title'>Carrito de Compras</h4>
                <ul className='cart__product-list'>
                    {
                        cartProducts?.map(product => (
                            <li className='cart__item' key={product.id}>
                                <div className='product__info'>

                                    <div className='product__details'>
                                        <span className='product__brand'>{product.brand}</span>
                                        <Link className='product__name'
                                            to={`/product/${product.id}`}
                                            onClick={handleClose}>

                                            {product.title}
                                        </Link>
                                        <div className='product__quantity'>
                                            {product.productsInCart?.quantity}
                                        </div>
                                    </div>
                                    <div className='product__delete'>
                                        <button className='delete__btn'>
                                            <i className='bx bx-trash' style={{ color: '#f85555' }}  ></i>
                                        </button>
                                    </div>
                                </div>
                                <div className='total'>
                                    <span className='label'>Total :</span>
                                    <b>$ {product.price * product.productsInCart?.quantity}</b>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className='checkout__section'>
                <div className="cart__total">
                    <span className='label'>Total :</span>
                    <b>$ {total}</b>
                </div>
                <button className='checkout__btn' onClick={checkout}>Checkout</button>
            </div>
        </div>
    )
}

export default CartModal