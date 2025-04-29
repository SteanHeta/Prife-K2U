import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { auth } from './firebase'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Login from './components/Login'
import Products from './components/Products'
import Cart from './components/Cart'
import Appointment from './components/Appointment'
import AppointmentsList from './components/AppointmentsList'
import Checkout from './components/Checkout'

function App() {
  const [user, setUser] = useState(null)
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart')
    return saved ? JSON.parse(saved) : []
  })
  const [appointments, setAppointments] = useState(() => {
    const saved = localStorage.getItem('appointments')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user)
    })
    return unsubscribe
  }, [])

  const saveCart = (newCart) => {
    localStorage.setItem('cart', JSON.stringify(newCart))
    setCart(newCart)
  }

  const saveAppointments = (newAppointments) => {
    localStorage.setItem('appointments', JSON.stringify(newAppointments))
    setAppointments(newAppointments)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar user={user} />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route 
            path="/products" 
            element={<Products cart={cart} saveCart={saveCart} />} 
          />
          <Route 
            path="/cart" 
            element={<Cart cart={cart} saveCart={saveCart} />} 
          />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/appointments" element={<AppointmentsList />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App