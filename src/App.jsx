import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Product from "./pages/Product"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import "./App.css"

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <Footer />
    </>
  )
}
