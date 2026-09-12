import { type Dispatch, type SetStateAction } from "react";
import type { ITechnologyCard } from "../../types/technologyCard";
import { Bounce, toast } from "react-toastify";

interface ITechCard {
  tech: ITechnologyCard;
  isAdded: ITechnologyCard[];
  setIsAdded: Dispatch<SetStateAction<ITechnologyCard[]>>;
}

const TechCard = ({ tech, isAdded, setIsAdded }: ITechCard) => {
  const isSelected = isAdded.some((item) => item.name === tech.name);
  const handleAddToStack = () => {
    if (isSelected) return;

    setIsAdded([...isAdded, tech]);

    if (isSelected === false) {
      toast.success(`${tech.name} added`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

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
    <div
      key={tech.name}
      className="bg-base-100 rounded-2xl border border-base-200 shadow-sm hover:shadow-md transition-all duration-300 p-5 space-y-1.5"
    >
      {/* Icon + Badge */}
      <div className="flex items-start justify-between">
        <img src={tech.icon} alt={tech.name} className="w-10 object-contain" />

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
        <span className="text-[#475569] font-medium bg-[#F1F5F9] rounded px-2 py-0.5">
          {tech.category}
        </span>

        <span className="text-[#64748B] text-xs">{tech.difficulty}</span>

        <span className="text-[#334155] font-semibold text-xs">
          <span className="text-yellow-500">★</span> {tech.rating}
        </span>
      </div>

      {/* Button */}
      <div className="mt-4">
        <button
          onClick={handleAddToStack}
          className={`btn btn-sm w-full py-2.5 text-xs font-medium rounded-lg ${
            isSelected
              ? "bg-gray-300 text-black/50 cursor-not-allowed"
              : "bg-[#0A0F1D] text-white"
          }`}
          disabled={isSelected}
        >
          {isSelected ? "✔ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechCard;
