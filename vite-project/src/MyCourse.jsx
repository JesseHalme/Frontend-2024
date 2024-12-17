import React, { useState } from "react";
import Dropdown from "./components/dropdown";
import PrefefinedNotes from "./courcsenotes/PrefefinedNotes";
import Note from "./Note";
import ApiNotes from "./courcsenotes/ApiNotes";

function MyCourse() {
    const peeps = PrefefinedNotes((state) => state.peeps);
    const [selectedCourse, setSelectedCourse] = useState(peeps[0]?.coursename || "");

    const CourseChange = (e) => {
        setSelectedCourse(e.target.value);
    };

    const courseNames = peeps.map(peep => peep.coursename);

    return (
        <div className="saved_notes">
            <div id="text_savednotes">
                <h1>Saved Notes</h1>
            </div>
            <div id="line"></div>

            <div id="ApiDiv">
                <Dropdown
                    options={courseNames}
                    selectedValue={selectedCourse}
                    onChange={CourseChange}
                />

                <ApiNotes />
            </div>

        </div>
    );
}

export default MyCourse;
