import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getProductsThunk } from './store/slices/products.slice'
import ProductInfo from './pages/ProductInfo'
import FooterDescription from './components/FooterDescription'
import Navigation from './components/Navigation'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { getUserCart } from './store/slices/cart.slice'
import Purchases from './pages/Purchases'
import User from './pages/User'
import ProtecterRoutes from './components/ProtecterRoutes'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductsThunk())
    dispatch(getUserCart())
  }, [])

  return (
    <div className="App">
      <Navigation />
      <Routes>
        {/* Rutas Publicas */}
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductInfo />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />

        {/* Rutas Protegidas */}
        <Route element={<ProtecterRoutes />}>
          <Route path='/purchases' element={<Purchases />} />
          <Route path='/user' element={<User />} />
        </Route>
      </Routes>
      <FooterDescription />
    </div>
  )
}

export default App
