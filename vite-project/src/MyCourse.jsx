import React, { useState, useEffect, useMemo } from "react";
import Dropdown from "./components/dropdown";
import UsePrefefinedNotes from "./courcsenotes/UsePrefefinedNotes";
import Note from "./Note";

function MyCourse() {
  const [selectedCourse, setSelectedCourse] = useState("");
  const notes = UsePrefefinedNotes((state) => state.notes);
  const fetchCourse = UsePrefefinedNotes.getState().fetchCourse;    //import functions from the useprefefinednotes file
  const fetchNotes = UsePrefefinedNotes.getState().fetchNotes;


  useEffect(() => {
    const fetchInitialData = async () => { // Let's define an asynchronous function that retrieves the necessary data
      await fetchCourse();
      await fetchNotes();
      setSelectedCourse("all"); // Set the selected course to "all" by default to show all notes
    };
    fetchInitialData();
  }, [fetchCourse, fetchNotes]); // useEffect will be re-run if these functions change


  const filteredNotes = useMemo(() => { // useMemo saves the computed value and recalculates it only when dependencies change
    if (selectedCourse == "all") {  // If "all" courses are selected, return all notes
      return notes;
    }
    const selectedCourseObject = UsePrefefinedNotes.getState().courses.find(  // Find the selected course object from the list of courses
      (course) => course.name == selectedCourse
    );
    return notes.filter((note) => note.course.id == selectedCourseObject?.id);  // Return notes that belong to the selected course
  }, [notes, selectedCourse]);


  const courseNames = useMemo(() => { // useMemo is used to compute the list of course names only when the course data changes
    const courses = UsePrefefinedNotes.getState().courses.map((course) => course.name);
    return ["all", ...courses];  // Extract course names from the list of courses and add "all" as an option
  }, [UsePrefefinedNotes.getState().courses]); // Dependency is the list of courses


  const CourseChange = (e) => { // Handles the selection change in the dropdown menu
    setSelectedCourse(e.target.value);  // Updates the selected course state
  };

  return (  // Rendered UI for the saved notes section

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
      </div>

      {filteredNotes.length > 0 ? ( // If there are filtered notes, render them inside an unordered list
        <ul>
          {filteredNotes.map((note) => ( // Render each note using the Note component
            <Note key={note.id} courseId={note.course.id} noteId={note.id} coursename={note.course.name} text={note.text} timestamp={note.timestamp} />
          ))}
        </ul>
      ) : ( // If no notes match the selected course, show a message indicating no notes are available. This is like if statement
        <p>No notes available for this course</p>
      )}
    </div>
  );
}

export default MyCourse;