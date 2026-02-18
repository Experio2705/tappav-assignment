import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Product from "./pages/Product"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import "./App.css"

export default function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="main container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
