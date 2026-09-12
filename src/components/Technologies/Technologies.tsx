import { use } from "react";
import type { ITechnologyCard } from "../../types/technologyCard";

interface ITechnologies {
  techPromise: Promise<ITechnologyCard[]>;
}


const Technologies = ({ techPromise }: ITechnologies) => {
  const technologies = use(techPromise);

  console.log(technologies);
  

  return (
    <div className="container mx-auto">
      <div className="mb-10">
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
    </div>
  );
};

export default Technologies;
