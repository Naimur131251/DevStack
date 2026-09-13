import { BsDot } from "react-icons/bs";
import LogoText from "../assets/logo-text.png";

const Footer = () => {
  return (
    <>
      {/* mobile & tablet............... */}
      <footer className="mt-16 mb-12 pt-12 md:pt-16 border border-white border-t-[#F1F5F9] lg:hidden">
        <div className="flex flex-col items-center gap-3 text-center px-7 md:px-12">

          <img
            src={LogoText}
            alt="Dev Stack"
            className="w-28 md:w-30 cursor-pointer"
          />

          <p className="text-xs md:text-sm leading-6 text-[#64748B] max-w-md">
            Curated tools, technologies, and resources for developers
            building modern software.
          </p>

          <div className="mt-5 md:mt-6 flex items-center gap-2 md:gap-3 mb-2">
            <button className="text-xs md:text-sm text-[#475569] cursor-pointer">
              GitHub
            </button>
            <BsDot />
            <button className="text-xs md:text-sm text-[#475569] cursor-pointer">
              Twitter
            </button>
            <BsDot />
            <button className="text-xs md:text-sm text-[#475569] cursor-pointer">
              LinkedIn
            </button>
          </div>

 
          <div className="w-full flex md:flex-row md:justify-between md:items-center gap-14 md:gap-8 pt-5 border border-white border-t-[#F1F5F9]">

            <p className="text-xs md:text-sm text-[#9CA3AF]">
              © 2026 Dev Stack. All rights reserved.
            </p>

            <div className="flex items-center justify-center gap-3 md:gap-5 text-xs md:text-sm text-[#9CA3AF]">
              <span className="cursor-pointer">Privacy</span>
              <span className="cursor-pointer">Terms</span>
            </div>

          </div>
        </div>
      </footer>


      {/* PC..............................*/}
      <footer className="hidden lg:block mt-16 mb-12 pt-16 border border-white border-t-[#F1F5F9]">
        <div className="container mx-auto">

          <div className="mb-14 grid grid-cols-5 gap-10">

            <div className="col-span-2 flex flex-col gap-3">

              <img
                src={LogoText}
                alt="Dev Stack"
                className="w-30 cursor-pointer"
              />

              <p className="max-w-md text-xs leading-6 text-[#64748B]">
                Curated tools, technologies, and resources for developers
                building <br />
                modern software.
              </p>

              <div className="mt-6 flex items-center gap-5">
                <button className="text-xs font-semibold text-[#475569] cursor-pointer">
                  GitHub
                </button>

                <button className="text-xs font-semibold text-[#475569] cursor-pointer">
                  Twitter
                </button>

                <button className="text-xs font-semibold text-[#475569] cursor-pointer">
                  LinkedIn
                </button>
              </div>

            </div>


            <div>
              <h2 className="font-bold text-[#0F172A] uppercase mb-4">
                Product
              </h2>

              <ul className="space-y-3 text-xs text-[#64748B]">
                <li><a href="">Home</a></li>
                <li><a href="">Technologies</a></li>
                <li><a href="">Projects</a></li>
              </ul>
            </div>


            <div>
              <h2 className="font-bold text-[#0F172A] uppercase mb-4">
                Company
              </h2>

              <ul className="space-y-3 text-xs text-[#64748B]">
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Careers</a></li>
              </ul>
            </div>


            <div>
              <h2 className="font-bold text-[#0F172A] uppercase mb-4">
                Legal
              </h2>

              <ul className="space-y-3 text-xs text-[#64748B]">
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Terms of Services</a></li>
              </ul>
            </div>

          </div>


          <div className="flex justify-between pt-8 border border-white border-t-[#F1F5F9]">

            <p className="text-xs text-[#94A3B8]">
              © 2026 Dev Stack. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-xs text-[#94A3B8]">
              <span className="cursor-pointer">Privacy</span>
              <span className="cursor-pointer">Terms</span>
            </div>

          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;