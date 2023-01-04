import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Filters from '../components/Filters';
import CardProduct from '../components/Home/CardProduct';

// Style Css
import './styles/home.css'

const Home = ({ isCartOpen, setIsCartOpen }) => {
    const products = useSelector(state => state.products)

    const [isOpenFilter, setIsOpenFilter] = useState(false)
    const [productsFilter, setProductsFilter] = useState()
    const [filterPrice, setFilterPrice] = useState({
        from: 0,
        to: Infinity
    })

    useEffect(() => {
        if (products) {
            setProductsFilter(products)
        }
    }, [products])

    const handdleChange = (e) => {
        const inputValue = e.target.value.toLowerCase().trim()
        const filter = products?.filter(prod => prod.title.toLowerCase().includes(inputValue))
        setProductsFilter(filter)
    }

    const filterCallBack = priceP => +priceP.price >= filterPrice.from && +priceP.price <= filterPrice.to

    return (
        <div className='main__container-filterBox'>
            <div className='filter__container'>
                <Filters
                    setFilterPrice={setFilterPrice}
                />
            </div>
            <div className="main-content">
                <div className="search__box">
                    <form className='form__container'>
                        <input className='form__input'
                            id='search' type="text"
                            placeholder='What are you looking for?'
                            onChange={handdleChange}
                        />
                        <button className='form__btn'><i className='bx bx-search' ></i></button>
                    </form>
                    <button className='filter__btn'
                        onClick={() => setIsOpenFilter(!isOpenFilter)}>
                        <i className='bx bx-filter-alt icon' ></i>
                        Filter
                    </button>
                    <div className={`filter-modal ${isOpenFilter ? 'open' : ''}`}>
                        <button className='close' onClick={() => setIsOpenFilter(false)}><i className='bx bx-x' ></i></button>
                        <h5>Filters</h5>
                        <Filters handleClose={() => setIsOpenFilter(!isOpenFilter)} />
                    </div>
                </div>
                <div className="products__container">
                    {
                        productsFilter?.filter(filterCallBack).map(product => (
                            <CardProduct
                                key={product.id}
                                product={product}
                                isCartOpen={isCartOpen}
                                setIsCartOpen={setIsCartOpen}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Home