import { useParams } from "react-router-dom"
import Gallery from "../components/Gallery"
import "../styles/product.css"

const products = {
  epson: {
    title: "Epson EH-TW7000 Home Cinema Projector",
    price: "₹1,59,990",
    features: [
      "4K PRO-UHD Projection",
      "3000 Lumens Brightness",
      "HDR Support",
      "Low Input Lag Gaming"
    ],
    specs: {
      Resolution: "4K PRO-UHD",
      Brightness: "3000 Lumens",
      Contrast: "40,000:1",
      HDMI: "2 Ports",
      "Lamp Life": "5000 Hours",
      Weight: "6.6 kg"
    },
    images: [
        "https://images.unsplash.com/photo-1768502171609-a51a20ea027a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1721733258290-cac1a9204564?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1728771227328-7cc2a0dc253a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },

  speaker: {
    title: "Premium Bookshelf Speakers",
    price: "₹49,990",
    features: ["Hi-Res Audio", "Wood Cabinet", "Wide Soundstage"],
    specs: {
      Power: "120W",
      Impedance: "6 Ohm",
      Frequency: "45Hz-40kHz",
      Weight: "7 kg"
    },
    images: [
      "https://plus.unsplash.com/premium_photo-1683141486694-4aa9d60803b6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1760531849884-bf17f1d379bf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1760531849911-76dda455f089?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  headphone: {
  title: "Audiophile Open-Back Reference Headphones",
  price: "₹19,990",
  features: [
    "Open-Back Natural Soundstage",
    "50mm Dynamic Drivers",
    "Detachable Oxygen-Free Copper Cable",
    "Comfort Memory Foam Ear Pads"
  ],
  specs: {
    Driver: "50mm Dynamic",
    Type: "Open Back",
    Impedance: "32 Ohm",
    Sensitivity: "98 dB",
    Frequency: "10Hz – 40kHz",
    Cable: "3m Detachable OFC",
    Weight: "290 g"
  },
  images: [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?q=80&w=1413&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1484704849700-f032a568e944"
  ]}
}

export default function Product() {
  const { id } = useParams()
  const product = products[id]

  return (
    <div className="product-page">
      <div className="product-top">
        <Gallery images={product.images} />
        <div className="info">
          <h1>{product.title}</h1>
          <h2>{product.price}</h2>

          <ul>
            {product.features.map((f,i)=> <li key={i}>{f}</li>)}
          </ul>

          <button className="buy">Add to Cart</button>
          <button className="buy now">Buy Now</button>
          <div className="specs">
            <h2>Specifications</h2>
            <table>
                <tbody>
                {Object.entries(product.specs).map(([key,value],i)=>(
                <tr key={i}>
                    <td>{key}</td>
                    <td>{value}</td>
                </tr>
                ))}
                </tbody>
            </table>
           </div>
        </div>
      </div>
    </div>
  )
}
