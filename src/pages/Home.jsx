import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Filters from '../components/Filters';
import CardProduct from '../components/Home/CardProduct';

// Style Css
import './styles/home.css'

const Home = () => {
    const products = useSelector(state => state.products)

    const [isOpenFilter, setIsOpenFilter] = useState(true)

    return (
        <div className='main__container-filterBox'>
            <div className='filter__container'>
                <Filters
                />
            </div>
            <div className="main-content">
                <div className="search__box">
                    <form className='form__container'>
                        <input className='form__input' id='search' type="text" placeholder='What are you looking for?' />
                        <button className='form__btn'><i className='bx bx-search' ></i></button>
                    </form>
                    <button className='filter__btn'
                        onClick={() => setIsOpenFilter(!isOpenFilter)}>
                        <i className='bx bx-filter-alt icon' ></i>
                        Filter
                    </button>
                    <div className={`filter-modal ${isOpenFilter ? 'open' : ''}`}>
                        <button className='close' onClick={() => setIsOpenFilter(false)}>x</button>
                        <h5>Filters</h5>
                        <Filters handleClose={() => setIsOpenFilter(!isOpenFilter)} />
                    </div>
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
        </div>
    )
}

export default Home