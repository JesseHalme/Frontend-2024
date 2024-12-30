import UsePrefefinedNotes from "./courcsenotes/UsePrefefinedNotes";

function Note({ courseId, noteId, coursename, text, timestamp }) {
    const deleteNote = UsePrefefinedNotes((state) => state.deleteNote);

    return (
        <li>
                <strong>{"ID: " + courseId + ")"} {coursename}</strong> : {text}
                &emsp;
                <small>{new Date(timestamp).toLocaleString()}</small>
            <button
                className="button"
                onClick={() => deleteNote(noteId)}>
                Delete
            </button>
        </li>
    );
}

export default Note;