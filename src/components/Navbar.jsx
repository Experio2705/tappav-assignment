import { Link } from "react-router-dom"
import "../styles/navbar.css"

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="logo">TappAV</div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/product/speaker">Speakers</Link>
        <Link to="/product/headphone">Headphones</Link>
        <Link to="/product/epson">Projectors</Link>
      </div>
    </nav>
  )
}
