import React, { useState } from "react";
import { CapsuleCard, Pagination, FilterComponent } from "./index";

function CapsuleContainer({ capsules }) {
  const [selectedFilters, setSelectedFilters] = useState({
    status: "",
    originalLaunch: "",
    type: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const capsulesPerPage = 10;

  const handleFilterChange = (filterName, value) => {
    setSelectedFilters({
      ...selectedFilters,
      [filterName]: value,
    });
  };

  const filteredCapsules = capsules.filter((capsule) => {
    const { status, originalLaunch, type } = selectedFilters;

    return (
      (!status || capsule.status === status) &&
      (!originalLaunch || capsule.originalLaunch === originalLaunch) &&
      (!type || capsule.type === type)
    );
  });

  const totalCapsules = filteredCapsules.length;
  const totalPages = Math.ceil(totalCapsules / capsulesPerPage);
  const indexOfLastCapsule = currentPage * capsulesPerPage;
  const indexOfFirstCapsule = indexOfLastCapsule - capsulesPerPage;
  const currentCapsules = filteredCapsules.slice(
    indexOfFirstCapsule,
    indexOfLastCapsule
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const uniqueStatusSet = new Set();
  const uniqueYearSet = new Set();
  const uniqueTypeSet = new Set();

  capsules.forEach((item) => {
    uniqueStatusSet.add(item.status);
  });

  capsules.forEach((item) => {
    uniqueYearSet.add(item.original_launch);
  });

  capsules.forEach((item) => {
    uniqueTypeSet.add(item.type);
  });

  const uniqueStatusArray = Array.from(uniqueStatusSet);
  const uniqueYearArray = Array.from(uniqueYearSet);
  const uniqueTypeArray = Array.from(uniqueTypeSet);

  return (
    <div className="flex flex-col">
      <div className="flex m-auto p-8">
        <FilterComponent
          uniqueStatusArray={uniqueStatusArray}
          uniqueYearArray={uniqueYearArray}
          uniqueTypeArray={uniqueTypeArray}
          onFilterChange={handleFilterChange}
        />
      </div>
      <div className="flex w-65 flex-wrap justify-center pt-8">
        {currentCapsules.map((capsule) => (
          <CapsuleCard capsule={capsule} key={capsule.flight_number} />
        ))}
      </div>
      <div className="flex w-65 flex-wrap justify-center p-8">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default CapsuleContainer;
