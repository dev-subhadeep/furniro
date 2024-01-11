import React from "react"
import HeroImage from "@/assets/hero.jpg"
import Image from "next/image"

const Hero = () => {
  return (
    <div>
      <Image src={HeroImage} fill alt="Furniro Hero Image" />
    </div>
  )
}

export default Hero
