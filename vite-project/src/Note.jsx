import UsePrefefinedNotes from "./courcsenotes/UsePrefefinedNotes";

function Note({ coursename, script }) {
    const deleteNote = UsePrefefinedNotes((state) => state.deleteNote);
    return (
        <li>
            {coursename}: {script}
            <button
                className="button"
                onClick={() => deleteNote({ name: coursename, script })}>
                Delete
            </button>
        </li>
    );
}


export default Note;