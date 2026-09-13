import { use } from "react";
import type { ITechnologyCard } from "../../types/technologyCard";
import AvailableTech from "./AvailableTech";

interface ITechnologies {
  techPromise: Promise<ITechnologyCard[]>;
}

const Technologies = ({ techPromise }: ITechnologies) => {
  const technologies = use(techPromise);

  return (
    <div className="container mx-auto">

      {/* mobile & tablet............... */}
      <div className="mb-8 md:mb-10 text-center lg:hidden">

        <h2 className="font-bold text-2xl md:text-4xl font-inter text-[#0F172A]">
          Explore{" "}
          <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        <p className="font-inter font-normal text-xs md:text-base text-[#64748B] mt-1 md:mt-2">
          Pick one technology per category to build your ideal stack.
        </p>

      </div>


      {/* PC..............................*/}
      <div className="hidden lg:block mb-10">

        <h2 className="font-extrabold text-4xl font-inter text-[#0F172A]">
          Explore the{" "}
          <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        <p className="font-sans font-normal text-xl text-[#64748B]">
          Pick one technology per category to build your ideal stack.
        </p>

      </div>


      <AvailableTech technologies={technologies} />

    </div>
  );
};

export default Technologies;