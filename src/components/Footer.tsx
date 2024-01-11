import React from "react"

const Footer = () => {
  return <footer className="px-10 py-8 container mx-auto">
    <div className="flex flex-row justify-between">
    <div>
      <h3 className="mb-[50px]">Furniro</h3>
      <p>400 University Drive, Suite 200 Canal</p>
      <p>Fl 33134 USA</p>
    </div>
    <div className="flex flex-row justify-between">
      <ul>
        <li>Links</li>
        <li>Home</li>
        <li>Shop</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <ul>
        <li>Help</li>
        <li>Payment Options</li>
        <li>Returns</li>
        <li>Privacy Policies</li>
      </ul>
    </div>
    <div>
      <h3>Newsletter</h3>
      <input className="capitalize" placeholder="Enter your email address" /> <button className="uppercase border border-b-black">Subscribe</button>
    </div>
  </div>
  <div className="border border-l-white border-r-white border-b-white border-t-slate-400 py-8">
    <p>2023 furniro. All rights reserved </p>
  </div>
  </footer>
}

export default Footer
