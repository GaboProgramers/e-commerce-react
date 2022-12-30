import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setCartGlobal } from '../store/slices/cart.slice'
import getConfig from '../utils/getConfig'

import './styles/purchases.css'

const Purchases = () => {
    const [purchases, setPurchases] = useState()
    const dispatch = useDispatch()

    const getPurchases = () => {
        const URL = 'https://e-commerce-api.academlo.tech/api/v1/purchases'
        axios.get(URL, getConfig())
            .then(res => setPurchases(res.data.data.Purchases))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getPurchases()
    }, [])

    const getPurchasesCart = () => {
        const URL = 'https://e-commerce-api.academlo.tech/api/v1/purchases'
        const data = {
            "street": "Green St. 1456",
            "colony": "Southwest",
            "zipCode": 12345,
            "city": "USA",
            "references": "Some references"
        }

        axios.post(URL, data, getConfig())
            .then(() => {
                dispatch(setCartGlobal())
                getPurchases()
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getPurchasesCart()
    }, [])

    console.log(purchases);

    /* const date = new Date(purchases.createdAt).toLocaleDateString('en-us', optiones) */

    return (
        <div className='purchases__content'>
            <h1>Purchases</h1>
            <div>
                {
                    purchases?.map(purchase => (
                        <b key={purchase.id}>
                            {purchase.cartId}
                        </b>
                    ))
                }
            </div>
        </div>
    )
}

export default Purchases