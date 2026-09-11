import HeroImage from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-8 items-center">
        <div className="col-span-7">
          <h1 className="font-extrabold text-[60px]/15 text-[#0F172A] font-inter tracking-tighter mb-6">
            Build Your Ideal{" "}
            <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="max-w-137 font-sans text-[18px]/7 text-[#475569] mb-10">
            Explore frontend, backend, database, and tooling options, <br />
            compare them side by side, and put together the stack that fits your
            next project.
          </p>
          <div className="font-semibold font-inter text-3.2/4 text-white flex gap-4">
            <button className="bg-linear-to-r from-[#F97316] to-[#EC4899] rounded-xl px-4 py-3 w-49.5">
              Explore Technologies
            </button>
            <button className="border border-[#E5E7EB] rounded-xl px-4 py-3 text-[#374151] font-normal w-49.5">
              Learn More
            </button>
          </div>
        </div>

        <img src={HeroImage} alt="HeroImage" className="col-span-5" />
      </div>
    </div>
  );
};

export default Hero;
