import React from 'react'
import ControlledCarousel from '../components/HomeSlideshow'
import ProductCard from '../components/ProductCard'
import Layout from '../Layout/Layout'


const Home = () => {
  return (
    <Layout>
      <>
      <ControlledCarousel />
      <ProductCard />
      </>
    </Layout>
  )
}

export default Home