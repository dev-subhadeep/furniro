import Image, { StaticImageData } from "next/image";
import React from "react";

const CategoryCard = ({
  image,
  category,
}: {
  image: StaticImageData;
  category: string;
}) => {
  return (
    <div className="flex flex-col">
      <Image src={image} objectFit="contain" alt="category" />
      <h4 className="my-4 text-lg text-center font-bold">{category}</h4>
    </div>
  );
};

export default CategoryCard;
