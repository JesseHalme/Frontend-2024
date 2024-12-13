import Note from "./Note";
import PrefefinedNotes from "./courcsenotes/PrefefinedNotes";
import { useState } from "react";

function MyCourse() {
    const peeps = PrefefinedNotes((state) => state.peeps);
    const [selectedCourse, setSelectedCourse] = useState(peeps[0]?.coursename || "");

    const CourseChange = (e) => {
        setSelectedCourse(e.target.value);
    };

    return (
        <div className="saved_notes">
            <div id="text_savednotes">
            <h1>Saved Notes</h1>
            </div>
            <div id="line"></div>
            
            <select id="dropdown" value={selectedCourse} onChange={CourseChange}>
                {peeps.map((peep, i) => (
                    <option key={i} value={peep.coursename}>
                        {peep.coursename}
                    </option>
                ))}
            </select>

            <ul>
                {
                    peeps.map((peep, i) => {
                        return (
                            <Note key={i} coursename={peep.coursename} script={peep.script} />
                        );
                    })
                }
            </ul>
        </div>

    );
}

export default MyCourse;