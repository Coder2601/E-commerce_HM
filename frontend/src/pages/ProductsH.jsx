import React from 'react'
import ProductCard from './ProductCardH'
import { products } from '../../data/ProductData'
import Layout from '../../Layout/Layout'

const Products = () => {
    
  return (

    products.map((item,index)=><ProductCard products={item} key={index} />)

  )
}

export default Products