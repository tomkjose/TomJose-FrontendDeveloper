import React from "react";
import { Select, Option } from "@material-tailwind/react";

export function FilterComponent({
  onFilterChange,
  uniqueStatusArray,
  uniqueYearArray,
  uniqueTypeArray,
}) {
  const handleStatusChange = (e) => {
    onFilterChange("status", e.target.value);
  };

  const handleOriginalLaunchChange = (e) => {
    onFilterChange("originalLaunch", e.target.value);
  };

  const handleTypeChange = (e) => {
    onFilterChange("type", e.target.value);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-6 mx-auto">
      <div className="flex-1">
        <Select size="lg" label="Status" onChange={handleStatusChange}>
          <Option value="">All</Option>
          {uniqueStatusArray.map((status) => (
            <Option key={status} value={status}>
              {status}
            </Option>
          ))}
        </Select>
      </div>
      <div className="flex-1">
        <Select
          size="lg"
          label="Original Launch"
          onChange={handleOriginalLaunchChange}
        >
          <Option value="">All</Option>
          {uniqueYearArray.map((year) => (
            <Option key={year} value={year}>
              {new Date(year).getFullYear()}
            </Option>
          ))}
        </Select>
      </div>
      <div className="flex-1">
        <Select size="lg" label="Type" onChange={handleTypeChange}>
          <Option value="">All</Option>
          {uniqueTypeArray.map((type) => (
            <Option key={type} value={type}>
              {type}
            </Option>
          ))}
          <Option value="Active">Active</Option>
        </Select>
      </div>
    </div>
  );
}
