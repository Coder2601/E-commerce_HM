import React from 'react'
import NavbarC from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = ({children}) => {
  return (
    <>
        <NavbarC/>
        <div>
            {children}
        </div>
        <Footer/>
    </>
  )
}

export default Layout