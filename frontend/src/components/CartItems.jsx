import React from 'react'
import { useSelector } from 'react-redux'

const CartItems = () => {
  
  const cartData = useSelector(state=>state.cartValue)
  console.log(cartData);
  return (

      <>

        {cartData ? cartData.cartItem.map((item,index)=>{
          return(
            <div key={index}>
            
              <img src={item.img} />
              <p>{item.name}</p>
              <p>{item.price}</p>
              <br/>
              <hr/>
              <br/>
            </div>
          )
        }): <h2>Nothing in Cart</h2>}
      </>

  )
}

export default CartItems