import React from "react"

const Carousel = React.lazy(() => import("../components/carousel"))

export default function LoadTest({ pageContext }) {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "30px" }}>
        Load Test {pageContext.index}
      </h1>
      <React.Suspense fallback={"Loading..."}>
        {pageContext.hasCarousel && <Carousel />}
      </React.Suspense>
    </div>
  )
}
