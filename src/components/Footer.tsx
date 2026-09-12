import LogoText from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="mt-16 mb-12 pt-16 border border-white border-t-[#F1F5F9]">
      <div className="container mx-auto">
        <div className="mb-14 grid grid-cols-5 gap-10">
          <div className="col-span-2 flex flex-col gap-3">
            <img src={LogoText} alt="Dev Stack" className="w-30" />
            <p className="max-w-md text-xs leading-6 text-[#64748B]">
              Curated tools, technologies, and resources for developers building{" "}
              <br />
              modern software.
            </p>
            <div className="mt-6 flex items-center gap-5">
              <button className="text-xs font-semibold text-[#475569]">
                GitHub
              </button>

              <button className="text-xs font-semibold text-[#475569]">
                Twitter
              </button>

              <button className="text-xs font-semibold text-[#475569]">
                LinkedIn
              </button>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-[#0F172A] uppercase mb-4">Product</h2>

            <ul className="space-y-3 text-xs text-[#64748B]">
              <li>Home</li>
              <li>Technologies</li>
              <li>Projects</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-[#0F172A] uppercase mb-4">Company</h2>

            <ul className="space-y-3 text-xs text-[#64748B]">
              <li>About</li>
              <li>Contact</li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-[#0F172A] uppercase mb-4">Legal</h2>

            <ul className="space-y-3 text-xs text-[#64748B]">
              <li>Privacy Policy</li>
              <li>Terms of Services</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between pt-8 border border-white border-t-[#F1F5F9]">
          <p className="text-xs text-[#94A3B8]">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-xs text-[#94A3B8]">
            <span>Privacy</span>

            <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
