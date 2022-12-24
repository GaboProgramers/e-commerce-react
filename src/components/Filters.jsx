import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../utils/getConfig'
import './styles/filters.css'

const Filters = () => {

    const [categoriesFilter, setCategoriesFilter] = useState()
    const [isClose, setIsClose] = useState(true)
    const [isOpen, setIsOpen] = useState(true)


    useEffect(() => {
        const URL = 'https://e-commerce-api.academlo.tech/api/v1/products/categories'
        axios.get(URL, getConfig())
            .then(res => setCategoriesFilter(res.data.data.categories))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='filter__content'>
            <div className={`filter__price ${isClose ? '' : 'closed'} `}>
                <div className="filter__header" onClick={() => setIsClose(!isClose)}>
                    <p className='filter__title'>Price</p>
                    <i className='bx bx-chevron-down icon'></i>
                </div>
                <form className='form__filter'>
                    <div className='form__filter-from'>
                        <label className='form__filter-label' htmlFor="from">From</label>
                        <input className='form__filter-input' type="number" id='from' />
                    </div>
                    <div className='form__filter-from'>
                        <label className='form__filter-label' htmlFor="to">To</label>
                        <input className='form__filter-input' type="number" id='to' />
                    </div>
                    <button className='filter__btn'>Filter price</button>
                </form>
            </div>
            <div className={`filter__category ${isOpen ? '' : 'closed'} `}>
                <div className="filter__header" onClick={() => setIsOpen(!isOpen)}>
                    <p className='filter__title'>Category</p>
                    <i className={`bx ${isOpen ? 'bx-chevron-down' : 'bx-chevron-up'} icon`} ></i>
                    {/* <i class='bx bx-chevron-up'></i> */}
                </div>
                <div className="category__list">
                    <ul>
                        {
                            categoriesFilter?.map(sCategory => (
                                <li key={sCategory.id}>
                                    <button className='list__items'>{sCategory.name}</button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Filters