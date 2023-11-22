import React, { useState } from "react";
import { CapsuleCard, Pagination } from "./index";
import { Select, Option } from "@material-tailwind/react";
import "../styles/styles.css";

function CapsuleContainer({ capsules }) {
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const capsulesPerPage = 10;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleStatusChange = (e) => {
    setStatus(String(e));
  };

  const handleTypeChange = (e) => {
    // console.log("Type selected:", e.target.value);
    setType(String(e));
  };

  const filteredCapsules = capsules.filter((capsule) => {
    const matchesStatus = !status || capsule.status === status;
    const matchesType = !type || capsule.type === type;

    return matchesStatus && matchesType;
  });

  const totalCapsules = filteredCapsules.length;
  const totalPages = Math.ceil(totalCapsules / capsulesPerPage);
  const indexOfLastCapsule = currentPage * capsulesPerPage;
  const indexOfFirstCapsule = indexOfLastCapsule - capsulesPerPage;
  const currentCapsules = filteredCapsules.slice(
    indexOfFirstCapsule,
    indexOfLastCapsule
  );

  const uniqueStatusSet = new Set();
  const uniqueTypeSet = new Set();

  capsules.forEach((item) => {
    uniqueStatusSet.add(item.status);
  });

  capsules.forEach((item) => {
    uniqueTypeSet.add(item.type);
  });

  const uniqueStatusArray = Array.from(uniqueStatusSet);
  const uniqueTypeArray = Array.from(uniqueTypeSet);

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap m-auto gap-4 p-8">
        <div className="w-72">
          <Select
            label="Status"
            name="status"
            value={status}
            onChange={handleStatusChange}
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
          >
            <Option value="">All</Option>
            {uniqueStatusArray.map((status) => (
              <Option key={status} value={status}>
                {status}
              </Option>
            ))}
          </Select>
        </div>
        <div className="w-72">
          <Select
            label="Type"
            name="type"
            value={type}
            onChange={handleTypeChange}
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
          >
            <Option value="">All</Option>
            {uniqueTypeArray.map((type) => (
              <Option key={type} value={type}>
                {type}
              </Option>
            ))}
          </Select>
        </div>
      </div>
      <div className="flex flex-wrap justify-center pt-8">
        {currentCapsules.map((capsule) => (
          <CapsuleCard capsule={capsule} key={capsule.capsule_serial} />
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
