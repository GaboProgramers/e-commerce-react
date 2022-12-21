import React, { useState } from 'react'
import './style/productDescription.css'

const ProductDescription = ({ product }) => {
    const [counter, setCounter] = useState(1)

    const handlePlus = () => {
        setCounter(counter + 1)
    }

    const handleMinus = () => {
        if (counter - 1 > 0) {
            setCounter(counter - 1)
        }
    }

    return (
        <div className='content_info-product'>
            <div className='history'>
                <a href="#/">Home</a>
                <div className='separator'></div>
                <strong>{product?.title}</strong>
            </div>
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
                <button className='description__btn'>Add to Cart <i className='bx bx-cart-add icon'></i></button>
            </article>
        </div>
    )
}

export default ProductDescription