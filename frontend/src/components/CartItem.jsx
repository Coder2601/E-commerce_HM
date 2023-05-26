import React, { useContext } from 'react'
import { ShopContext } from '../context/ShoppingContext';

const CartItem = (props) => {
    const cartItemStyle = {
        border: '2px solid black',
        display: 'inline-block',
        marginLeft: 10,
        padding: 10,
        width: 200,
        height: 'fitContent'
    }
    const ipStyle = {
        display: 'inline',
        width: '50px'
    }


    const { id, img, name, price } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext)



    return (
        <>
            <div style={cartItemStyle} className='cartsItem'>
                <img width='100px' height='100px' src={img} />
                <div className='description'>
                    <p>
                        <b>{name}</b>
                    </p>
                    <p>Rs.{price}</p>
                    <div className='countHandler'>
                        <button onClick={() => removeFromCart(id)}>-</button>
                        <input style={ipStyle} type="text" value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
                        <button onClick={() => addToCart(id)}>+</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItem