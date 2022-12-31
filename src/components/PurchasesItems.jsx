import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../pages/styles/purchases.css'

const PurchasesItems = ({ purchase }) => {

    const navigate = useNavigate()

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }

    const date = new Date(purchase.createdAt).toLocaleDateString('en-us', options)

    return (
        <div>
            <div>
                <strong>{date}</strong>
            </div>

            <ul>
                {
                    purchase.cart.products.map(productItem => (
                        <li key={productItem.id}
                            onClick={() => navigate(`/product/${productItem.id}`)}
                        >
                            <div>
                                {productItem.title}
                            </div>
                            <div>
                                <div>
                                    {productItem.productsInCart.quantity}
                                </div>
                            </div>
                            <div>
                                $ {productItem.price}
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default PurchasesItems