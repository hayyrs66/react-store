import { useState } from "react";
import style from "../style";
import { navLinks } from "../constants";
import { logo, bars } from "../assets";

const Header = () => {

  const [isHovering, setIsHovering] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true)
  }
  const handleMouseOut = () => {
    setIsHovering(false)
  }

  const handleMouseOver2 = () => {
    setIsHovering2(true)
  }
  const handleMouseOut2 = () => {
    setIsHovering2(false)
  }

  const [menu, setMenu] = useState(false);

  return (
    <>
      <header className={`${style.Xpadding} fixed py-5 flex justify-between 
    items-center top-0  w-full border-css bg-[#F1F1F1] z-10`}>
        <div></div>
        <div className="absolute">
          <form action="">
            <input type="search" name="search" className="trans-faster relative z-10 bg-transparent
            w-8 h-8 rounded-full focus:border focus:w-full focus:border-gray-400
            outline-none cursor-pointer focus:cursor-text pl-12 focus-pl-16 focus:pr-4" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
              className="absolute inset-y-0 my-auto w-12 px-3.5 border-r border-transparent
            peer-focus:border-white stroke-black
            ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </form>
        </div>
        <div className="ml-[11rem] sbg:ml-[0rem]">
          <img src={logo} alt="logo" className="w-[180px] h-[34px] cursor-pointer" />
        </div>
        <div className="flex gap-4">
          <div className="sbg:hidden flex justify-center items-center gap-1 cursor-pointer"
            onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <svg xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
              className={`${isHovering ? "stroke-[#727272]" : "stroke-black"} w-5 h-5 trans-faster`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            <span className={`${isHovering ? "text-[#727272]" : ""} font-poppins font-normal text-[14px]
            trans-faster`}>Account</span>
          </div>
          <div className="sbg:hidden flex justify-center items-center gap-1 cursor-pointer"
          onMouseOver={handleMouseOver2} onMouseOut={handleMouseOut2}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              strokeWidth={1.5} stroke="currentColor" 
              className={`${isHovering2 ? "stroke-[#727272]" : "stroke-black"} w-5 h-5 trans-faster`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <span className={`${isHovering2 ? "text-[#727272]" : ""} font-poppins font-normal text-[14px]
            trans-faster`}>Shoping</span>
          </div>
          <img src={bars} alt="Menu" className="hidden sbg:block w-[24px]" />
        </div>
      </header>
      <nav className={`bg-[#F1F1F1] fixed-center absolute w-full z-0 mt-[7rem] sbg:hidden`}>
        <ul className="flex flex-wrap justify-center items-center leading-[1px] text-center gap-8">
          {navLinks.map((link, index) => (
            <li key={index}><a href={link.id} className="font-poppins font-normal
             text-[16px] hover:text-[#727272] trans-faster">
              {link.title}</a></li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Header
