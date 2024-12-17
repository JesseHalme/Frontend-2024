import React from "react";
import PrefefinedNotes from "../courcsenotes/PrefefinedNotes";

function Dropdown({ options, selectedValue, onChange }) {

    return (
        <select className="dropdown"
            value={selectedValue}
            onChange={onChange}
        >
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
}

export default Dropdown;
