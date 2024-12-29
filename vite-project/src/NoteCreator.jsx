import React, { useState, useEffect } from "react";
import Dropdown from "./components/dropdown";
import UsePrefefinedNotes from "./courcsenotes/UsePrefefinedNotes";


function NoteCreator() {
    const [coursename, setCourseName] = useState("");
    const [note, setNote] = useState("");
    const addNote = UsePrefefinedNotes((state) => state.addNote);
    const addCourse = UsePrefefinedNotes((state) => state.addCourse);
    const peeps = UsePrefefinedNotes((state) => state.peeps);
    const courseNames = peeps.map((course) => course.name);
    const fetchCourse = UsePrefefinedNotes.getState().fetchCourse;
    const fetchNotes = UsePrefefinedNotes.getState().fetchNotes;

    useEffect(() => {
        const fetchInitialData = async () => {
            await fetchCourse();
            await fetchNotes();
        };
        fetchInitialData();
    }, [fetchCourse, fetchNotes]);

    const SaveNote = () => {
        if (coursename.length == 0 || note.length == 0) {
            alert("Please select a course and write a note.");
            return;
        }

        const selectedCourse = peeps.find(course => course.name == coursename);
        const noteId = UsePrefefinedNotes.getState().notes.length + 1;
        const timeStamp = new Date().toLocaleString();

        const newNote = {id: noteId, course: selectedCourse, text: note, timestamp: timeStamp };
        addNote(newNote);
        setNote("");
        setCourseName("");
        console.log(UsePrefefinedNotes.getState().notes);
    };

    const SaveCourse = () => {
        if (coursename.length == 0) {
            alert("Please enter a course name.");
            return;
        }
        const duplicateCourse = peeps.some((course) => course.name.toLowerCase() === coursename.toLowerCase());
        if (duplicateCourse) {
            alert("This course name already exists. Please check your course name and choose a different name");
            setCourseName("");
            return;
        }

        const courseId = peeps.reduce((maxId, course) => Math.max(maxId, course.id), -1) + 1;

        const newCourse = {id: courseId, name: coursename };
        addCourse(newCourse);
        setCourseName("");
        alert(`Course "${coursename}" added and it id is ${courseId}`);
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
