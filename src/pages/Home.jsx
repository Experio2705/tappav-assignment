import ProductCard from "../components/ProductCard"
import { Link,useNavigate } from "react-router-dom"
import "../styles/home.css"

export default function Home() {
    const navigate=useNavigate();
  return (
    <div>
      <div className="hero">
        <h1>Experience Sound & Vision Like Never Before</h1>
        <Link to="/product/epson" className="cta">Explore Projectors</Link>
      </div>

      <section className="categories">
        <div className="cat" onClick={()=>navigate("/product/headphone")}>Headphones</div>
        <div className="cat" onClick={()=>navigate("/product/speaker")}>Speakers</div>
        <div className="cat" onClick={()=>navigate("/product/epson")}>Projectors</div>
        <div className="cat" onClick={()=>navigate("/product/epson")}>Home Theater</div>
      </section>
        <section className="products">
        <ProductCard
            id="epson"
            img="https://images.unsplash.com/photo-1593784991095-a205069470b6"
            title="Epson EH-TW7000 Projector"
            price="₹1,59,990"
            />
        <ProductCard
            id="speaker"
            img="https://plus.unsplash.com/premium_photo-1683141486694-4aa9d60803b6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Premium Bookshelf Speakers"
            price="₹49,990"
        />
        <ProductCard
            id="headphone"
            img="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
            title="Audiophile Headphones"
            price="₹19,990"
        />
        </section>
    </div>
  )
}
