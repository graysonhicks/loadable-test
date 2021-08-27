import React from "react"
import loadable from "@loadable/component"

const Carousel = loadable(() => import("../components/carousel"))
const Heading = loadable(() => import("../components/heading"))
const Text = loadable(() => import("../components/text"))

export default function LoadTest({ pageContext }) {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "30px" }}>
        Load Test {pageContext.index}
      </h1>

      {pageContext.hasHeading && <Heading>Yep, I have a heading!</Heading>}
      {pageContext.hasText && <Text>Yep, I have text!</Text>}
      {pageContext.hasCarousel && <Carousel />}
    </div>
  )
}
