import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import { Outlet } from "react-router-dom";
import "./index.css";

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <Navbar/>
      <Outlet context={[cartItems, setCartItems]} />
    </>
  )
}