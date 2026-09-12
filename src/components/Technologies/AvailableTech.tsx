import type { ITechnologyCard } from "../../types/technologyCard";

interface IAvailableTech {
  technologies: ITechnologyCard[];
}

const AvailableTech = ({ technologies }: IAvailableTech) => {
  const badgeColoring = (badge: string) => {
    switch (badge) {
      case "Popular":
        return "bg-[#F0F9FF] text-[#0EA5E9] border-[#E0F2FE]";

      case "Versatile":
        return "bg-[#ECFDF5] text-[#059669] border-[#D1FAE5]";

      case "Fast":
        return "bg-[#FFF7ED] text-[#EA580C] border-[#FFEDD5]";
 
      case "Standard":
        return "bg-[#ECFDF5] text-[#059669] border-[#D1FAE5]";

      case "Top SQL":
        return "bg-[#EFF6FF] text-[#2563EB] border-[#DBEAFE]";

      case "Cache":
        return "bg-[#FEF2F2] text-[#DC2626] border-[#FEE2E2]";

      case "Ubiquitous":
        return "bg-[#FFFBEB] text-[#D97706] border-[#FEF3C7]";

      case "Essential":
        return "bg-[#F0F9FF] text-[#0284C7] border-[#E0F2FE]";

      case "Robust":
        return "bg-[#F0F9FF] text-[#0284C7] border-[#E0F2FE]";
        
      case "Modern":
        return "bg-[#ECFEFF] text-[#0891B2] border-[#CFFAFE]";

      case "Containers":
        return "bg-[#F0F9FF] text-[#0284C7] border-[#E0F2FE]";

      default:
        return "border-none";
    }
  };

  return (
    <div className="grid grid-cols-12 gap-5 mb-12">
      <div className="col-span-9 grid grid-cols-3 gap-5">
        {technologies.map((tech) => {
          return (
            <div
              key={tech.name}
              className="bg-base-100 rounded-2xl border border-base-200 shadow-sm hover:shadow-md transition-all duration-300 p-5 space-y-1.5"
            >
              {/* Icon + Badge */}
              <div className="flex items-start justify-between">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-10 object-contain"
                />

                <span
                  className={`inline-flex items-center px-2.5 py-1 rounded-full border text-[11.5px] font-semibold font-sans ${badgeColoring(
                    tech.badge,
                  )}`}
                >
                  {tech.badge}
                </span>
              </div>

              {/* Title */}
              <h2 className="font-bold text-[#0F172A] text-[18px]">{tech.name}</h2>

              {/* Description */}
              <p className="text-xs text-[#64748B] leading-relaxed ">
                {tech.description}
              </p>

              {/* Bottom Info */}
              <div className="flex items-center justify-between mt-4 text-xs">
                <span className="text-[#475569] font-medium bg-[#F1F5F9] rounded px-2 py-0.5">{tech.category}</span>

                <span className="text-[#64748B] text-xs">{tech.difficulty}</span>

                <span className="text-[#334155] font-semibold text-xs"><span className="text-yellow-500">★</span> {tech.rating}</span>
              </div>

              {/* Button */}
              <div className="mt-4">
                <button className="btn btn-neutral btn-sm w-full bg-[#0A0F1D] py-2.5 text-white font-medium text-xs rounded-2">
                  Add to Stack
                </button>
              </div>
            </div>
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
