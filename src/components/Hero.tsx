import HeroImage from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <div className="container mx-auto">

      {/* mobile & tablet............... */}
      <div className="flex flex-col items-center lg:hidden">

        <div className="px-5 md:px-10">

          <h1
            className="
              font-bold
              text-3xl
              md:text-5xl
              text-[#0F172A]
              font-inter
              tracking-tighter
              mb-5
              md:mb-6
              mt-9
              md:mt-12
              text-center
            "
          >
            Build Your Ideal <br />

            <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p
            className="
              max-w-137
              mx-auto
              font-inter
              text-[14px]/7
              md:text-[16px]/7
              text-[#475569]
              mb-8
              md:mb-10
              text-center
            "
          >
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits your
            next project.
          </p>

          <div
            className="
              font-normal
              font-inter
              text-xs/4
              md:text-sm/5
              text-white
              flex
              gap-3
              md:gap-4
              justify-center
            "
          >
            <button
              className="
                bg-linear-to-r
                from-[#F97316]
                to-[#EC4899]
                rounded-xl
                px-4
                py-3
                w-44
                md:w-52
                md:py-3.5
              "
            >
              Explore Technologies
            </button>

            <button
              className="
                border
                border-[#E5E7EB]
                rounded-xl
                px-4
                py-3
                w-44
                md:w-52
                md:py-3.5
                text-[#374151]
                font-normal
              "
            >
              Learn More
            </button>
          </div>
        </div>

        <img
          src={HeroImage}
          alt="HeroImage"
          className="
            -mt-3.75
            md:-mt-2
            w-full
            md:w-[80%]
            max-w-130
          "
        />
      </div>


      {/* PC..............................*/}
      <div className="hidden lg:grid grid-cols-12 gap-8 items-center">

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

        <img
          src={HeroImage}
          alt="HeroImage"
          className="col-span-5"
        />

      </div>

    </div>
  );
};

export default Hero;