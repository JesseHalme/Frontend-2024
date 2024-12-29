import UsePrefefinedNotes from "./courcsenotes/UsePrefefinedNotes";

function Note({ id, coursename, text, timestamp }) {
    const deleteNote = UsePrefefinedNotes((state) => state.deleteNote);

    return (
        <li>
                <strong>{"ID: " + id + ")"} {coursename}</strong> : {text}
                &emsp;
                <small>{new Date(timestamp).toLocaleString()}</small>
            <button
                className="button"
                onClick={() => deleteNote(id)}>
                Delete
            </button>
        </li>
    );
}

export default Note;