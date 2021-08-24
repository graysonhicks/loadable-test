import React from "react"
import Carousel from "../components/carousel"

export default function LoadTest({ pageContext }) {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "30px" }}>
        Load Test {pageContext.index}
      </h1>
      {pageContext.hasCarousel && <Carousel />}
    </div>
  )
}
