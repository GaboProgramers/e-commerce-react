import React from 'react'
import './styles/filters.css'

const Filters = () => {
    return (
        <div className='filter__content'>
            <div className="filter__price">
                <div className="filter__header">
                    <p className='filter__title'>Price</p>
                    <i className='bx bx-chevron-down icon' ></i>
                </div>
                <form className='form__filter'>
                    <div className='form__filter-from'>
                        <label className='form__filter-label' htmlFor="from">From</label>
                        <input className='form__filter-input' type="text" id='from' />
                    </div>
                    <div className='form__filter-from'>
                        <label className='form__filter-label' htmlFor="to">To</label>
                        <input className='form__filter-input' type="text" id='to' />
                    </div>
                    <button>Filter price</button>
                </form>
            </div>
            <div className='filter__category'>
                <div className="filter__header">
                    <p className='filter__title'>Category</p>
                    <i className='bx bx-chevron-down icon' ></i>
                </div>
                <div className="category__list">
                    <ul>
                        <li>Hola Mundo</li>
                        <li>Hola Mundo</li>
                        <li>Hola Mundo</li>
                        <li>Hola Mundo</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Filters