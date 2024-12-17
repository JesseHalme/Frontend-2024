import { create } from "zustand";

let nextCourseId = 0;
export const CourseId = () => {
    return nextCourseId++;
};

const PrefefinedNotes = create((set) => ({
    peeps: [
        { id: CourseId(), coursename: "JavaScript", script: "JavaScript is funny language" },
        { id: CourseId(), coursename: "Programming 1", script: "Now I know, how to for loop working in c#!" },
    ],
    saveNote: (n) => set((state) => ({ peeps: [...state.peeps, n] })),

}));

export default PrefefinedNotes;
