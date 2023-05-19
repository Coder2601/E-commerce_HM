import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Register from './pages/Register'
import Products from './pages/Products';
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import About from './pages/About'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/*' element={<NotFound/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
