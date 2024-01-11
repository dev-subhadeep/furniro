import React from "react"
import Nav from "./Nav"
import QuickLinks from "./QuickLinks"

const Navbar = () => {
  return (
    <header className="flex flex-row justify-between border border-b-black py-[29px] px-[54px]">
      <div>Furnio</div>
      <Nav />
      <QuickLinks />
    </header>
  )
}

export default Navbar
