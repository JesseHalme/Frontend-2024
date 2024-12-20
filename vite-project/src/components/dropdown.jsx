import React from "react";

function Dropdown({ options, selectedValue, onChange }) {

    return (
        <select className="dropdown"
            value={selectedValue}
            onChange={onChange}
        >
            {options.map((option, i) => (
                <option key={i} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
}

export default Dropdown;
