import React, { useContext } from 'react'
import { ShopContext } from '../context/ShoppingContext'

const ProductCard = (props) => {
  const cardStyle = {
    border: '2px solid black',
    display: 'inline-block',
    marginLeft: 10,
    padding: 10,
    width:200,
    height:300
  }

  const { id, img, name, price} = props.products;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    <div style={cardStyle}>

        <img src={img} width='150px' height='150px' /> <br />
        <h3>Rs. {price}</h3>
        <h2>{name}</h2>
        <button onClick={() => addToCart(id)}>Add to Cart {cartItemAmount>0 && <>({cartItemAmount})</>} </button>
    </div>
  )
}

export default ProductCard