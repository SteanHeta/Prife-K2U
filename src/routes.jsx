import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Appointment from "./components/Appointment";
import AppointmentsList from "./components/AppointmentsList";

export const router = createBrowserRouter([
{
path: '/',
element: <Home />,
},
{
path: '/products',
element: <Products />,
},
{
path: '/appointments',
element: <AppointmentsList />,
},
{
path: '/login',
element: <Login />,
},
{
path: '/cart',
element: <Cart />,
},    
]);