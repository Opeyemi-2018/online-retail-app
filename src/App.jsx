
import Home from './components/Home'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductInfo from './components/ProductInfo'
import { useState } from 'react'
import Cart from './components/Cart'
// import Pratice from './pratice'
import Footer from './components/Footer'
import Gadget from './components/Gadget'
import Speaker from './components/Speaker'
import AllProduct from './components/AllProduct'
import Speakerinfo from './components/Speakerinfo'

function App() {
  let [carts, setCart] = useState([])
  let [cartCount, setCartCount] = useState(0)
  let [itemQuantity, setItemQuantity] = useState(1)
  let [showSignUp, setShowSignUp] = useState(false);
  let [showSuccessMsg, setShowSuccessMsg] = useState(false)

  let [nav, setNav] = useState(false)


  return (
    <div className='relative'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar nav={nav} setNav={setNav} carts={carts} setCart={setCart} cartCount={cartCount} setCartCount={setCartCount} showSignUp={showSignUp} setShowSignUp={setShowSignUp} />} >
            <Route index element={<Home showSignUp={showSignUp} setShowSignUp={setShowSignUp} />} />
            <Route path='AllProduct' element={<AllProduct showSignUp={showSignUp} nav={nav} setNav={setNav} />} />
            <Route path='AllProduct/:id' element={<ProductInfo itemQuantity={itemQuantity} setItemQuantity={setItemQuantity} showSignUp={showSignUp} carts={carts} setCart={setCart} cartCount={cartCount} setCartCount={setCartCount} showSuccessMsg={showSuccessMsg} setShowSuccessMsg={setShowSuccessMsg} />} />
            <Route path='cart' element={<Cart itemQuantity={itemQuantity} setItemQuantity={setItemQuantity} cartCount={cartCount} setCartCount={setCartCount} showSignUp={showSignUp} carts={carts} setCart={setCart} />} />
            {/* <Route path='practice' element={<Pratice />} /> */}
            <Route path='gadget' element={<Gadget showSignUp={showSignUp} />} />
            <Route path='Speaker' element={<Speaker showSignUp={showSignUp} />} />
            <Route path='Speaker/:id' element={<Speakerinfo carts={carts} setCart={setCart} showSignUp={showSignUp} showSuccessMsg={showSuccessMsg} setShowSuccessMsg={setShowSuccessMsg} />} />
          </Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  )

}

export default App
