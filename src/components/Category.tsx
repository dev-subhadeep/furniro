import React from "react"
import CategoryCard from "./CategoryCard"
import Living from "@/assets/image 100.png"

const Category = () => {
  return (
    <div>
      <h2>Browse The Range</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
      <div className="flex flex-row gap-4">
        <CategoryCard image={Living} category="Living" />
        <CategoryCard image={Living} category="Living" />
        <CategoryCard image={Living} category="Living" />
      </div>
    </div>
  )
}

export default Category
