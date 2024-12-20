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
    };
    fetchInitialData();
  }, [fetchCourse, fetchNotes]);


const filteredNotes = useMemo(() => {
  return notes.filter((note) => note.course === selectedCourse);
}, [notes, selectedCourse])


const courseNames = useMemo(() => {
    return UsePrefefinedNotes.getState().peeps.map((course) => course.name);
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
                    {filteredNotes.map((note, i) => (
                        <Note key={i} coursename={note.course} script={note.note} />
                    ))}
                </ul>
            ) : (
                <p>No notes available for this course</p>
            )}
    </div>
  );
}

export default MyCourse;
