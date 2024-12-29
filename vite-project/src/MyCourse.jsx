import React, { useState, useEffect, useMemo } from "react";
import Dropdown from "./components/dropdown";
import UsePrefefinedNotes from "./courcsenotes/UsePrefefinedNotes";
import Note from "./Note";

function MyCourse() {
  const [selectedCourse, setSelectedCourse] = useState("");
  const notes = UsePrefefinedNotes((state) => state.notes);
  const fetchCourse = UsePrefefinedNotes.getState().fetchCourse;
  const fetchNotes = UsePrefefinedNotes.getState().fetchNotes;


  useEffect(() => {
    const fetchInitialData = async () => {
      await fetchCourse();
      await fetchNotes();
      setSelectedCourse("all");
    };
    fetchInitialData();
  }, [fetchCourse, fetchNotes]);


  const filteredNotes = useMemo(() => {
    if (selectedCourse == "all") {
      return notes;
    }
    const selectedCourseObject = UsePrefefinedNotes.getState().peeps.find(
      (course) => course.name == selectedCourse
    );
    return notes.filter((note) => note.course.id == selectedCourseObject?.id);
  }, [notes, selectedCourse]);


  const courseNames = useMemo(() => {
    const courses = UsePrefefinedNotes.getState().peeps.map((course) => course.name);
    return ["all", ...courses];
  }, [UsePrefefinedNotes.getState().peeps]);


  const CourseChange = (e) => {
    setSelectedCourse(e.target.value);
  };

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
      </div>

      {filteredNotes.length > 0 ? (
        <ul>
          {filteredNotes.map((note) => (
            <Note key={note.id} id={note.course.id} coursename={note.course.name} text={note.text} timestamp={note.timestamp} />
          ))}
        </ul>
      ) : (
        <p>No notes available for this course</p>
      )}
    </div>
  );
}

export default MyCourse;