import { create } from "zustand";

const PrefefinedNotes = create((set) => ({
    peeps: [
        { coursename: "JavaScript", script: "JavaScript is funny language" },
        { coursename: "JavaScript", script: " *Next day* JavaScript is not fun today" },
        { coursename: "Programming 1", script: "Now I know, how to for loop working in c#!" },
    ],
    saveNote: (n) => set((state) => ({ peeps: [...state.peeps, n] })),

}));

export default PrefefinedNotes;