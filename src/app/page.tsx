import Category from "@/components/Category";
import Products from "@/components/Products";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Category />
      <Products />
    </main>
  );
}
