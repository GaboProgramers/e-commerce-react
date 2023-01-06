// axios
import axios from 'axios'

// react - state - efect
import React, { useState } from 'react'

// react-redux
import { useDispatch } from 'react-redux'

// sweetalert2
import Swal from 'sweetalert2'

// configuracion token
import getConfig from '../../utils/getConfig'

// slices
import { getUserCart } from '../../store/slices/cart.slice'

// import pages
import CurrentPage from '../CurrentPage'

//css
import './style/productDescription.css'

const ProductDescription = ({ product }) => {
    const [counter, setCounter] = useState(1)
    const dispatch = useDispatch()

    const handlePlus = () => {
        setCounter(counter + 1)
    }

    const handleMinus = () => {
        if (counter - 1 > 0) {
            setCounter(counter - 1)
        }
    }

    console.log(product);

    const handleCardAdd = () => {
        const URL = 'https://e-commerce-api.academlo.tech/api/v1/cart'
        const data = {
            id: product.id,
            quantity: counter
        }
        axios.post(URL, data, getConfig())
            .then(res => {
                dispatch(getUserCart())
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })

                Toast.fire({
                    icon: 'success',
                    title: 'products add to cart'
                })
            })
            .catch(err => {
                if (err.response.status === 401) {
                    navigate('/login')
                } else {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })

                    Toast.fire({
                        icon: 'error',
                        title: 'You already added this product to the cart'
                    })
                }
            })
    }

    return (
        <div className='content_info-product'>
            <CurrentPage currentPage={product?.title} />
            <article className='description__card'>
                <h2 className='description__title'>{product?.title}</h2>
                <p className='description__paragraph'>{product?.description}</p>
                <div className="content__price-count">
                    <section className='description__price'>
                        <span className='price-title'>Price</span>
                        <h3 className='price-valor'>{product?.price}</h3>
                    </section>
                    <section className='description_quantity'>
                        <h3 className='quantity__title'>Quantity</h3>
                        <div className='quantity_count'>
                            <div className='quantity__btn' onClick={handleMinus}>-</div>
                            <div className='quantity-counter'>{counter}</div>
                            <div className='quantity__btn' onClick={handlePlus}>+</div>
                        </div>
                    </section>
                </div>
                <button className='description__btn' onClick={handleCardAdd}>Add to Cart <i className='bx bx-cart-add icon'></i></button>
            </article>
        </div>
    )
}

export default ProductDescription



// Los componentes compartidos van en la carpeta shared