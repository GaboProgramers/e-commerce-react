import React from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../components/Home/CardProduct';

// Style Css
import './styles/home.css'
const Home = () => {
    const products = useSelector(state => state.products)

    return (
        <div>
            <div className="search__box">
                <form className='form__container'>
                    <input className='form__input' id='search' type="text" placeholder='What are you looking for?' />
                    <button className='form__btn'><i className='bx bx-search' ></i></button>
                </form>
                <button className='filter__btn'><i className='bx bx-filter-alt icon' ></i> Filter</button>
            </div>
            <div className="products__container">
                {
                    products?.map(product => (
                        <CardProduct
                            key={product.id}
                            product={product}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Home