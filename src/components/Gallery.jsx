import { useState } from "react"

export default function Gallery({ images }) {
  const [main, setMain] = useState(images[0])

  return (
    <div className="gallery">
      <img className="main-img" src={main} />
      <div className="thumbs" style={{display:"flex"}}>
        {images.map((img, i) => (
          <img key={i} src={img} onClick={() => setMain(img)} />
        ))}
      </div>
    </div>
  )
}
