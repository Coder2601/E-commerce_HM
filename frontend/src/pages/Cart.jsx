import React from 'react'
import Layout from '../Layout/Layout'
import CartItems from '../components/CartItems'

const Cart = () => {
  return (
    <Layout>
      <h2>Cart</h2>
      <CartItems/>
    </Layout>
  )
}

export default Cart