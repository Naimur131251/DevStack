import { useState } from "react";
import LogoText from "../assets/logo-text.png";
import { HiBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-3 md:py-4 lg:py-5 border border-white border-b-[#F1F5F9] sticky top-0 z-50 bg-white">
      <div className="container mx-auto flex items-center justify-between text-[#475569] px-5 md:px-8 lg:px-0">

        {/* mobile & tablet............... */}      
        <div className="flex w-full items-center justify-between lg:hidden">

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl md:text-3xl text-[#7B7171] cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <RxCross1 /> : <HiBars3 />}
          </button>

          <img
            src={LogoText}
            alt="Dev Stack"
            className="w-20 md:w-24 ml-5 md:ml-8 cursor-pointer"
          />

          <div className="flex items-center gap-2 md:gap-4 text-[9px] md:text-xs">
            <button className="cursor-pointer">Sign in</button>

            <button className="bg-[#D91B7E] text-white px-2.5 py-1 md:px-4 md:py-2 rounded-3xl cursor-pointer">
              Sign Up
            </button>
          </div>
        </div>


        {/* mobile & tablet............... */}
        {isOpen && (
          <div className="absolute left-0 top-14 md:top-16 w-full bg-white px-5 md:px-8 py-5 lg:hidden border-t border-[#F1F5F9] shadow-sm z-50">
            <ul className="flex flex-col gap-4 text-sm md:text-base font-sans">
              <li className="text-[#DB2777] font-semibold"><a href="">Home</a></li>
              <li><a href="">Technologies</a></li>
              <li><a href="">Projects</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </div>
        )}


        {/* PC..............................*/}
        <div className="hidden lg:flex w-full items-center justify-between">

          <img
            src={LogoText}
            alt="Dev Stack"
            className="cursor-pointer"
          />

          <ul className="flex gap-7 items-center font-sans">
            <li className="text-[#DB2777] font-semibold"><a href="">Home</a></li>
            <li><a href="">Technologies</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
          </ul>

          <div className="flex items-center gap-5">
            <button className="cursor-pointer">Sign in</button>

            <button className="bg-[#D91B7E] text-white px-5 py-2.5 rounded-3xl cursor-pointer">
              Sign Up
            </button>
          </div>

        </div>

      </div>
    </nav>
  );
};

export default Nav;