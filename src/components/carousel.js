import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Carousel } from "react-responsive-carousel"

import "react-responsive-carousel/lib/styles/carousel.min.css"

export default function GatsbyCarousel() {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      useKeyboardArrows
    >
      <div>
        <StaticImage src="../images/home.webp" alt="home" />
      </div>
      <div>
        <StaticImage src="../images/sun.webp" alt="sun" />
      </div>
      <div>
        <StaticImage src="../images/gatsby-astronaut.png" alt="astronaut" />
      </div>
    </Carousel>
  )
}
