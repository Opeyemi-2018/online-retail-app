
import Home from './components/Home'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductInfo from './components/ProductInfo'
import { useState } from 'react'
import Cart from './components/Cart'
// import Pratice from './pratice'
import Footer from './components/Footer'
import Gadget from './components/Gadget'


// import AllProduct from './components/AllProduct'


function App() {
  let [search, setSearch] = useState('')
  let [carts, setCart] = useState([])
  let [cartCount, setCartCount] = useState(0)
  let [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className='relative'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar cartCount={cartCount} setCartCount={setCartCount} showSignUp={showSignUp} setShowSignUp={setShowSignUp} search={search} setSearch={setSearch} />} >
            <Route index element={<Home showSignUp={showSignUp} setShowSignUp={setShowSignUp} search={search} setSearch={setSearch} />} />
            {/* <Route path='AllProduct' element={<AllProduct />} /> */}
            <Route path='/:id' element={<ProductInfo showSignUp={showSignUp} carts={carts} setCart={setCart} />} />
            <Route path='cart' element={<Cart cartCount={cartCount} setCartCount={setCartCount} showSignUp={showSignUp} carts={carts} setCart={setCart} />} />
            {/* <Route path='practice' element={<Pratice />} /> */}
            <Route path='gadget' element={<Gadget />} />
          </Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  )

}

export default App
