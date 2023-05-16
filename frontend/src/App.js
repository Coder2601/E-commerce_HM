import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import NotFound from './components/NotFound';
import Login from './components/Login'
import Register from './components/Register'
import ProductCard from './components/ProductCard'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/products' element={<ProductCard/>} />
          <Route path='/*' element={<NotFound/>} />
        </Routes>
        <Footer/>
      </Router>
      {/* <Router>
        <Routes>
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </Router> */}
      
    </div>
  );
}

export default App;
