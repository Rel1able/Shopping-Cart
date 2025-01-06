import Navbar from "./components/Navbar.jsx";
import { Outlet } from "react-router-dom";
import "./index.css";

export default function App() {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}