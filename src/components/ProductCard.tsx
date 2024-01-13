import React from "react";
import SampleImage from "@/assets/image 76.png";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div>
      <div className="relative min-w-[300px] min-h-[400px]">
        <Image src={SampleImage} alt="Furniture" fill className="absolute" />
        <div className="absolute bg-gray-100 bottom-0 right-0 left-0 p-4 ">
          <h3 className="text-xl font-bold">Slytherine</h3>
          <p className="text-sm text-slate-400">Stylish Cafe Chair</p>
          <p>
            <b>Rp 20002.00p </b> &nbsp; &nbsp;
            <span className="line-through text-sm text-slate-400">
              Rp 200200.000
            </span>
          </p>
        </div>
        <div className="invisible hover:visible bg-slate-black/80 absolute top-0 left-0 botton-0 right-0 h-full w-full flex flex-col justify-center items-center">
          <button className="border border-red-200 py-4 px-8">
            Add to cart
          </button>
        </div>
        <div className="absolute flex flex-col justify-center items-center text-white top-4 right-4 p-8 rounded-full bg-green-400 w-4 h-4">
          New
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
