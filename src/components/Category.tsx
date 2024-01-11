import React from "react"
import CategoryCard from "./CategoryCard"
import Living from "@/assets/image 100.png"
import Dining from "@/assets/image 106.png"
import Bedroom from "@/assets/image 101.png"

const Category = () => {
  return (
    <div>
      <h2>Browse The Range</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
      <div className="flex flex-row gap-4">
        <CategoryCard key={1} image={Living} category="Living" />
        <CategoryCard key={2} image={Dining} category="Living" />
        <CategoryCard key={3} image={Bedroom} category="Living" />
      </div>
    </div>
  )
}

export default Category
