import { useState } from "react";
import PrefefinedNotes from "./courcsenotes/PrefefinedNotes";

function NoteCreator() {
    const [coursename, setCourseName] = useState("");
    const [note, setNote] = useState("");
    const saveNote = PrefefinedNotes((state) => state.saveNote);

    const Save = () => {

        if (coursename.length < 1 || note.length < 1){
            alert("MUST BE AT LEAST 1 CHARACTER");
        }
        else{
            const n = { coursename, script: note };
             setCourseName("");
             setNote("");
    
            saveNote(n);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={coursename}
                onChange={(e) => setCourseName(e.target.value)}
                placeholder="Course name"
            />
            <input
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Note"
            />
            <button onClick={Save}>Save</button>
        </div>
    );
}

export default NoteCreator;