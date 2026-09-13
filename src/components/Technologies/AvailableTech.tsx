import { useState } from "react";
import type { ITechnologyCard } from "../../types/technologyCard";
import SelecteTech from "./SelecteTech";
import TechCard from "./TechCard";

interface IAvailableTech {
  technologies: ITechnologyCard[];
}

const AvailableTech = ({ technologies }: IAvailableTech) => {
  const [isAdded, setIsAdded] = useState<ITechnologyCard[]>([]);

  return (
    <div className="mb-15 px-5 lg:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
        
        <div className="md:col-span-2 lg:col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {technologies.map((tech) => (
            <TechCard
              key={tech.name}
              tech={tech}
              isAdded={isAdded}
              setIsAdded={setIsAdded}
            />
          ))}
        </div>

        <div className="md:col-span-2 lg:col-span-3">
          <SelecteTech
            isAdded={isAdded}
            setIsAdded={setIsAdded}
          />
        </div>

      </div>
    </div>
  );
};

export default AvailableTech;