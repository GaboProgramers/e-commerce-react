import React from 'react'
import { useNavigate } from 'react-router-dom'

// Styles Css
import './style/cardProduct.css'

const CardProduct = ({ product }) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/product/${product.id}`)
    }

    return (
        <article className='card__content' onClick={handleClick}>
            <header className='card__header'>
                <div className="card__img">
                    {<img className='over' src={product.productImgs[1]} alt={product.title} />}
                    <img className='img__primary' src={product.productImgs[0]} alt={product.title} />
                </div>
            </header>
            <section className='card__description'>
                <h2 className='card__title'>
                    {product.title}
                </h2>
                <article className='card__price'>
                    <span className='card__item-price'>Price</span>
                    <h3 className='card__item-valor'>{product.price}</h3>
                </article>
                <button className='card__btn'><i className='bx bx-cart-add icon'></i></button>
            </section>
        </article>
    )
}

export default CardProduct