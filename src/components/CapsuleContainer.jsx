import React from "react";
import { CapsuleCard, Pagination, FilterComponent } from "./index";
function CapsuleContainer({ capsules }) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap justify-center p-8">
        <FilterComponent />
      </div>
      <div className="flex w-65 flex-wrap justify-center pt-8 ">
        {capsules.map((capsule) => (
          <CapsuleCard capsule={capsule} key={capsule.flight_number} />
        ))}
      </div>
      <div className="flex w-65 flex-wrap justify-center p-8">
        <Pagination />
      </div>
    </div>
  );
}

export default CapsuleContainer;
