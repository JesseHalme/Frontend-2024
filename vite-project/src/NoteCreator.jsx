import React, { useState } from "react";
import Dropdown from "./components/dropdown";
import UsePrefefinedNotes from "./courcsenotes/UsePrefefinedNotes";
import TimeStamp from "./components/Timestamp"


function NoteCreator() {
    const [coursename, setCourseName] = useState("");
    const [note, setNote] = useState("");
    const addNote = UsePrefefinedNotes((state) => state.addNote);
    const addCourse = UsePrefefinedNotes((state) => state.addCourse);
    const peeps = UsePrefefinedNotes((state) => state.peeps);
    const courseNames = peeps.map((course) => course.name);

    const SaveNote = () => {
        if (!coursename || !note) {
            alert("Please select a course and write a note.");
            return;
        }
        const newNote = { course: coursename, script: note, timestamp: TimeStamp };
        addNote(newNote);
        setNote("");
    };

    const SaveCourse = () => {
        if (!coursename) {
            alert("Please enter a course name.");
            return;
        }
        const newCourse = { name: coursename };
        addCourse(newCourse);
        setCourseName("");
    };

    return (
        <div id="add_container">
            <div id="note_container">
                <h4>From here you can add notes. To right you can add new course</h4>
                <Dropdown
                    options={courseNames}
                    selectedValue={coursename}
                    onChange={(e) => setCourseName(e.target.value)}
                />
                <textarea
                    id="note_input"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Write your note here..."
                />
                <button className="button" onClick={SaveNote}>Save</button>
            </div>
            <div id="course_container">
                <h4>From here you can add a new course. Please, add your course and write a note to the left</h4>
                <input
                    id="course_input"
                    type="text"
                    value={coursename}
                    onChange={(e) => setCourseName(e.target.value)}
                    placeholder="Course name"
                />
                <br />
                <button className="button" onClick={SaveCourse}>Save</button>
            </div>
        </div>
    );
}

export default NoteCreator;
