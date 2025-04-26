// App.jsx
import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Appointment from "./components/Appointment";
import AppointmentsList from "./components/AppointmentsList";

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function saveAppointments() {
  localStorage.setItem("appointments", JSON.stringify(appointments));
}

function App() {
  const [page, setPage] = React.useState("home");
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setPage(currentUser ? "home" : "login");
    });
  }, []);

  const renderPage = (pageName) => {
    setPage(pageName);
  };

  return (
    <>
      <Navbar user={user} renderPage={renderPage} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {page === "home" && <Home />}
        {page === "login" && <Login renderPage={renderPage} />}
        {page === "products" && <Products />}
        {page === "cart" && <Cart />}
        {page === "appointment" && <Appointment />}
        {page === "appointments" && <AppointmentsList />}
      </main>
      <Footer />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));