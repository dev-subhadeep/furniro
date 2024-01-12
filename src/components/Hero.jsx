import React from "react";
import HeroImage from "@/assets/hero.jpg";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full bg-gradient-to-r from-cyan-200 to-blue-500 flex flex-row justify-end">
      <div className="px-6 py-10 flex flex-col gap-3 bg-yellow-50 w-[500px] mx-[50px] my-[100px]">
        <h2 className="font-bold">New Arrival</h2>
        <h1 className="text-4xl text-yellow-600 font-bold">
          Discover Our <br />
          New Collection
        </h1>
        <p>Lorem ipsum dolor sit amet unga boonga tellus nec ullalala natt.</p>
        <Link
          href={"/shop"}
          className="uppercase bg-yellow-900 w-[200px] h-[60px] flex flex-row justify-center items-center text-white font-bold"
        >
          Buy now
        </Link>
      </div>
    </div>
  );
};

export default Hero;
