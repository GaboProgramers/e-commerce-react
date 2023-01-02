import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { getProductsThunk } from './store/slices/products.slice'
import { getUserCart } from './store/slices/cart.slice'
import Home from './pages/Home'
import ProductInfo from './pages/ProductInfo'
import FooterDescription from './components/FooterDescription'
import Navigation from './components/Navigation'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Purchases from './pages/Purchases'
import User from './pages/User'
import ProtecterRoutes from './components/ProtecterRoutes'

function App() {
  const dispatch = useDispatch()
  const [isCartOpen, setIsCartOpen] = useState(false)


  useEffect(() => {
    dispatch(getProductsThunk())
    dispatch(getUserCart())
  }, [])

  return (
    <div className="App">
      <Navigation isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      <Routes>
        {/* Rutas Publicas */}
        <Route path='/' element={<Home isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />} />
        <Route path='/product/:id' element={<ProductInfo />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />

        {/* Rutas Protegidas */}
        <Route element={<ProtecterRoutes />}>
          <Route path='/purchases' element={<Purchases />} />
          <Route path='/user' element={<User />} />
        </Route>
      </Routes>
      <div className="footer">
        <FooterDescription />
      </div>
    </div>
  )
}

export default App
