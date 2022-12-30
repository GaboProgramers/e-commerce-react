import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Filters from '../components/Filters';
import CardProduct from '../components/Home/CardProduct';

// Style Css
import './styles/home.css'

const Home = () => {
    const products = useSelector(state => state.products)

    const [isOpenFilter, setIsOpenFilter] = useState(false)

    const [search, setSearch] = useState('')

    const [filterName, setFilterName] = useState()

    // const dispatch = useDispatch()

    const getProductFilterName = name => {
        const URL = `https://e-commerce-api.academlo.tech/api/v1/products?query=${name}`
        axios.get(URL)
            .then(res => setFilterName(res.data.data.products))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getProductFilterName(filterName)
    }, [])


    const handleSearch = (e) => {
        e.preventDefault()
        getProductFilterName(search)
    }

    return (
        <div className='main__container-filterBox'>
            <div className='filter__container'>
                <Filters
                />
            </div>
            <div className="main-content">
                <div className="search__box">
                    <form className='form__container' onSubmit={handleSearch}>
                        <input className='form__input'
                            id='search' type="text"
                            value={search}
                            placeholder='What are you looking for?'
                            onChange={e => setSearch(e.target.value)}
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