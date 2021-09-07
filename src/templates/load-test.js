import React from "react"

const Carousel = React.lazy(() => import("../components/carousel"))
const Heading = React.lazy(() => import("../components/heading"))
const Text = React.lazy(() => import("../components/text"))

export default function LoadTest({ pageContext }) {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "30px" }}>
        Load Test {pageContext.index}
      </h1>
      <React.Suspense fallback={"Loading..."}>
        {pageContext.hasHeading && <Heading>Yep, I have a heading!</Heading>}
        {pageContext.hasText && <Text>Yep, I have text!</Text>}
        {pageContext.hasCarousel && <Carousel />}
      </React.Suspense>
    </div>
  )
}
