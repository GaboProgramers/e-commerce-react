import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getProductsThunk } from './store/slices/products.slice'
import ProductInfo from './pages/ProductInfo'
import FooterDescription from './components/FooterDescription'
import Navigation from './components/Navigation'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductsThunk())
  }, [])

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductInfo />} />
      </Routes>
      <FooterDescription />
    </div>
  )
}

export default App
