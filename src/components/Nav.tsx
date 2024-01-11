import { url } from "inspector"
import Link from "next/link"
import React from "react"

const navItems = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Shop",
    url: "/shop",
  },
  {
    label: "About",
    url: "/about",
  },

  {
    label: "Contact",
    url: "/contact",
  },
]
const Nav = () => {
  return (
    <div className="xs: hidden sm:hidden md:block lg:block xl:block">
      <ul className="flex flex-row gap-4">
        {navItems.map((navItem) => (
          <li>
            <Link href={navItem.url}>{navItem.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Nav
