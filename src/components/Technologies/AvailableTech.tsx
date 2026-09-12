import type { ITechnologyCard } from "../../types/technologyCard";
import TechCard from "./TechCard";

interface IAvailableTech {
  technologies: ITechnologyCard[];
}

const AvailableTech = ({ technologies }: IAvailableTech) => {

  return (
    <div className="grid grid-cols-12 gap-5 mb-12">
      <div className="col-span-9 grid grid-cols-3 gap-5">
        {technologies.map((tech) => {
          return (
            <TechCard tech = {tech} />
          );
        })}
      </div>

      <div className="col-span-3">
        <div className="w-full max-w-87.5 rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
          {/* Title */}
          <h2 className="text-4 font-bold text-[#0F172A]">Your Stack</h2>

          {/* Subtitle */}
          <p className="mt-1 text-xs text-[#94A3B8]">
            No technologies selected yet.
          </p>

          {/* Empty State */}
          <div className="mt-5 flex h-21.25 items-center justify-center rounded-xl border border-dashed border-[#E2E8F0] p-6">
            <p className="text-[15px] text-slate-400">Your stack is empty.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableTech;
