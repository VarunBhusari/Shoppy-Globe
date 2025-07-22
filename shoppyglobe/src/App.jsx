import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'

const Home = lazy(() => import('./pages/Home.jsx'))
const ProductDetail = lazy(() => import('./features/products/ProductDetail.jsx'))
const Cart = lazy(() => import('./features/cart/Cart.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<p className="p-6 text-center">Loading...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
