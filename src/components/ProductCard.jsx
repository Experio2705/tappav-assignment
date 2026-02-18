import { Link } from "react-router-dom"

export default function ProductCard({ img, title, price, id }) {
  return (
    <div className="card">
      <img src={img} />
      <h3>{title}</h3>
      <p>{price}</p>
      <Link to={`/product/${id}`} className="btn">View Details</Link>
    </div>
  )
}
