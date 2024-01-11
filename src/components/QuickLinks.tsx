import Link from "next/link"
import React from "react"

const QuickLinks = () => {
  return (
    <div className="flex flex-row gap-4">
      <Link href={"/account"}>Account</Link>
      <Link href={"/search"}>Search</Link>
      <Link href={"/wishlist"}>Wishlist</Link>
      <Link href={"/cart"}>Cart</Link>
    </div>
  )
}

export default QuickLinks
