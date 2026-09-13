import type { Dispatch, SetStateAction } from "react";
import type { ITechnologyCard } from "../../types/technologyCard";
// import AvailableTech from "./AvailableTech";
import { RxCross1 } from "react-icons/rx";
import { Bounce, toast } from "react-toastify";

interface ISelecteTech {
  isAdded: ITechnologyCard[];
  setIsAdded: Dispatch<SetStateAction<ITechnologyCard[]>>;
}

const SelecteTech = ({ isAdded, setIsAdded }: ISelecteTech) => {
  const handleRemoveTech = (selectTech: ITechnologyCard) => {
    const removeTech = isAdded.filter(
      (addTech) => addTech.name !== selectTech.name,
    );

    setIsAdded(removeTech);

    toast.warn(`${selectTech.name} removed`, {
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
  };
  const handleRemoveAll = () => {
    toast.warn('Remove all technologies', {
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
    setIsAdded([]);
  };

  if (isAdded.length === 0) {
    return (
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
    );
  }

  return (
    <div className="col-span-3">
      <div className="w-full max-w-87.5 rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
        {/* Title */}
        <h2 className="text-4 font-bold text-[#0F172A]">Your Stack</h2>

        {/* Subtitle */}
        <p className="mt-1 text-xs text-[#94A3B8]">
          {isAdded.length} Technology Selected
        </p>

        {/* Empty State */}
        {isAdded.map((selectTech: ITechnologyCard) => {
          return (
            <div className="flex justify-between items-center border border-[#E2E8F0] rounded-xl p-4 mb-1">
              <div className="flex gap-2">
                <img
                  src={selectTech.icon}
                  alt={selectTech.name}
                  className="w-7"
                />
                <div>
                  <h2 className="font-bold text-xs text-[#0F172A]">
                    {selectTech.name}
                  </h2>
                  <p className="font-bold text-[8px] text-[#94A3B8]">
                    {selectTech.category}
                  </p>
                </div>
              </div>
              <span
                className="cursor-pointer"
                onClick={() => handleRemoveTech(selectTech)}
              >
                <RxCross1 className="text-[#94A3B8] " />
              </span>
            </div>
          );
        })}

        <button
          className="border border-[#ED8C85] rounded-lg w-full text-[#D82C20] font-semibold font-inter text-[14px] h-7.5 mt-11 cursor-pointer"
          onClick={handleRemoveAll}
        >
          Remove All
        </button>
      </div>
    </div>
  );
};

export default SelecteTech;
