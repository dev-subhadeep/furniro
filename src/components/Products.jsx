import React from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";
const Products = () => {
  let products = new Array(8).fill(8);
  return (
    <section>
      <h2 className="my-4 text-3xl font-bold text-center">Our Products</h2>
      <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-6 mx-auto my-10">
        {products.length &&
          products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
      </div>
      <div className="flex flex-row items-center justify-center">
        <Link
          href={"/shop"}
          className="text-yellow-900 font-bold border border-yellow-900 py-4 px-12"
        >
          Show more
        </Link>
      </div>
    </section>
  );
};

export default Products;
