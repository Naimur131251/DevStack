import LogoText from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className="py-5">
      <div className="container mx-auto flex justify-between items-center text-[#475569]">
        <img src={LogoText} alt="" />

        <ul className="flex gap-7 items-center font-sans">
          <li className="text-[#DB2777] font-semibold">Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="flex gap-5">
          <button>Sign in</button>
          <button className="bg-[#D91B7E] text-white px-5 py-2.5 rounded-3xl">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
