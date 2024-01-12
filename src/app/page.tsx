import Category from "@/components/Category";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero /> <Category />
      <ProductCard />
    </main>
  );
}
