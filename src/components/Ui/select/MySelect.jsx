import React from "react";

const MySelect = ({ defaulValue, options, value, onChange, ...props }) => {
  return (
    <select
      {...props}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      <option value="" disabled>
        {defaulValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
