import Category from "@/components/Category"
import Image from "next/image"
import ProductCard from "@/components/ProductCard"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Category />
      <ProductCard />
    </main>
  )
}
