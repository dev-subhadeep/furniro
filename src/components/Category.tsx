import React from "react";
import CategoryCard from "./CategoryCard";
import Dining from "@/assets/image 100.png";
import Living from "@/assets/image 106.png";
import Bedroom from "@/assets/image 101.png";

const Category = () => {
  return (
    <div>
      <div className="my-10">
        <h2 className="text-2xl font-bold text-center">Browse The Range</h2>
        <p className="text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing.
        </p>
      </div>
      <div className="flex flex-row gap-4">
        <CategoryCard key={1} image={Living} category="Dining" />
        <CategoryCard key={2} image={Dining} category="Living" />
        <CategoryCard key={3} image={Bedroom} category="Bedroom" />
      </div>
    </div>
  );
};

export default Category;
