import { create } from "zustand";

const UsePrefefinedNotes = create((set, get) => ({
    notes: [],
    peeps: [],
    addNote: (n) => set((state) => ({ notes: [...state.notes, n] })),
    addCourse: (c) => set((state) => ({ peeps: [...state.peeps, c] })),

    fetchCourse: async () => {
    if (!get().hasFetchedCourses) {
      try {
        const response = await fetch(
          "https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses"
        );
        const result = await response.json();
        console.log(result);
        set({ peeps: result, hasFetchedCourses: true });
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    }
  },

  fetchNotes: async () => {
    if (!get().hasFetchedNotes) {
      try {
        const response = await fetch(
          "https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes"
        );
        const result = await response.json();
        console.log(result);
        set({ notes: result, hasFetchedNotes: true });
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    }
  },
    deleteNote: (id) =>
        set((state) => ({
             notes: state.notes.filter((note) => note.id !== id),
        })),
}));

export default UsePrefefinedNotes;
