import { create } from "zustand";

const UsePrefefinedNotes = create((set, get) => ({
  notes: [], // List of notes
  courses: [],  // List of courses
  
  // The addNote function adds a new note (n) to the existing list of notes
  // It updates the state by appending the new note to the existing notes
  // ^ Same thing with add course
  addNote: (n) => set((state) => ({ notes: [...state.notes, n] })),
  addCourse: (c) => set((state) => ({ courses: [...state.courses, c] })),

  fetchCourse: async () => { // Function to fetch courses from an API
    if (!get().hasFetchedCourses) { // Check if courses have already been fetched
      try {
        const response = await fetch( // Fetch courses from API
          "https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses"
        );
        const result = await response.json(); // Parse JSON response
        console.log(result);
        set({ courses: result, hasFetchedCourses: true });  // Update state with fetched courses
      } catch (error) {
        console.error("Error fetching courses:", error);  // Handle errors
      }
    }
  },

  fetchNotes: async () => { // Function to fetch notes from an API
    if (!get().hasFetchedNotes) { // Check if notes have already been fetched
      try {
        const response = await fetch( // Fetch notes from API
          "https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes"
        );
        const result = await response.json(); // Parse JSON response
        console.log(result);
        set({ notes: result, hasFetchedNotes: true });  // Update state with fetched notes
      } catch (error) {
        console.error("Error fetching notes:", error);  // Handle errors
      }
    }
  },
  deleteNote: (id) => // Function to delete a note by ID
    set((state) => ({
      notes: state.notes.filter((note) => note.id != id), // Filter out the note with the given ID
    })),
}));

export default UsePrefefinedNotes;
