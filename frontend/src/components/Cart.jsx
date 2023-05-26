import React, { useContext } from 'react'
import { products } from '../../data/ProductData'
import { ShopContext } from '../context/ShoppingContext'
import CartItem from './CartItem'
import Layout from '../../Layout/Layout'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const nav = useNavigate()
    const { cartItems, getTotalCartAmount } = useContext(ShopContext)
    const totalAmount = getTotalCartAmount()
    return (
        <Layout>
            <div className='cart'>
                <h1>Your cart Items</h1>
            </div>
            <div className='cartItems'>
                {products.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product} />
                    }
                })}
            </div>
            {totalAmount > 0 ?
                <div className='checkout'>

                    <p>SubTotal = Rs. {totalAmount}</p>
                    <button onClick={() => nav('/products')}>Continue Shopping</button>
                    <button>Checkout</button>
                </div>
                :
                <>
                    <h1>Your cart is Empty</h1>
                    <button onClick={() => nav('/products')}>Go to Products Page</button>
                </>
            }
        </Layout>
    )
}

export default Cart