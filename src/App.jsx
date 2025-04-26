import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { auth } from './firebase';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Products from './components/Products';
import Cart from './components/Cart';
import Appointment from './components/Appointment';
import AppointmentsList from './components/AppointmentsList';
import './index.css';

function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [appointments, setAppointments] = useState(JSON.parse(localStorage.getItem('appointments')) || []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const saveCart = (updatedCart) => {
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const saveAppointments = (updatedAppointments) => {
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
    setAppointments(updatedAppointments);
  };

  return (
    <Router>
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
            <Route 
              path="/appointment" 
              element={<Appointment appointments={appointments} saveAppointments={saveAppointments} />} 
            />
            <Route 
              path="/appointments" 
              element={<AppointmentsList appointments={appointments} saveAppointments={saveAppointments} />} 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);