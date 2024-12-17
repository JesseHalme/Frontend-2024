import React, { useState } from "react";
import Dropdown from "./components/dropdown";
import PrefefinedNotes, { CourseId } from "./courcsenotes/PrefefinedNotes";
import TimeStamp from "./components/Timestamp";
import ApiNotes from "./courcsenotes/ApiNotes";


function NoteCreator() {
    const [coursename, setCourseName] = useState("");
    const [note, setNote] = useState("");

    const peeps = PrefefinedNotes((state) => state.peeps);
    const saveNote = PrefefinedNotes((state) => state.saveNote);


    const SaveNote = () => {
        if (note.length < 1) {
            alert("Note can't be empty");
        } else {
            const n = { id: TimeStamp(), script: note, timestamp: new Date().toISOString() };
            setNote("");
            saveNote(n);
            console.log(`New Note TimeStamp is: ${n.id}`);
        }
    };

    const SaveCourse = () => {
        const courses = PrefefinedNotes.getState().peeps;

        if (coursename.length < 1) {
            alert("Course name can't be empty");
        }
        else if (courses.some(course => course.coursename.toLowerCase() === coursename.toLowerCase())) {
            alert(`Course '${coursename}' already exists!`);
        } else {
            const n = { id: CourseId(), coursename, script: note };
            setCourseName("");
            setNote("");

            saveNote(n);
            alert(`Course ${coursename} added and it ID is ${n.id}`);
        }
    };

    const courseNames = PrefefinedNotes((state) => state.peeps).map(peep => peep.coursename);

    return (
        <div id="add_container">


            <div id="note_container">
                <h4>From here you can add notes</h4>
                <Dropdown
                    options={courseNames}
                    selectedValue={coursename}
                    onChange={(e) => setCourseName(e.target.value)}
                />
                <textarea
                    id="note_input"
                    type="text"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Note"
                />
                <button className="button" onClick={SaveNote}>Save</button>                             
                

            </div>
            <div id="course_container">
                <h4>From here you can add a new courses. Please, add your course and write note to left</h4>
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
