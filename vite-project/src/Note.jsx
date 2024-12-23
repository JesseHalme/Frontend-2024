import UsePrefefinedNotes from "./courcsenotes/UsePrefefinedNotes";

function Note({ id, coursename, script, timestamp }) {
    const deleteNote = UsePrefefinedNotes((state) => state.deleteNote);

    return (
        <li>
                <strong>{id + ")"} {coursename}</strong> : {script}
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