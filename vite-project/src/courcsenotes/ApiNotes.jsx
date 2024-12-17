import React, { useState } from "react";

const ApiNotes = () => {
    const [searchnote, setSearchnote] = useState([]);

    // Fetch Data Function
    async function fetchData() {
        const noteURL = "https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes";
        let noteResponse = await fetch(noteURL);
        let noteJson = await noteResponse.json();
        console.log(noteJson);

        let noteValue = noteJson.map(note => note.name); // Tässä oletetaan, että 'name' on yksittäisen muistiinpanon nimi.
        setSearchnote(noteValue);

    }

    const clickHandler = () => {
        console.log("Back to work");
        fetchData();
    };

    const deleteNote = (oldnote) => {
        console.log(oldnote);
        let new_note = searchnote.filter((j) => j !== oldnote);
        setSearchnote(new_note);

    };

    return (
        <div>
            <button className="button" onClick={clickHandler}>Fetch Note</button>
            <ul>
                {searchnote.map((oldnote, i) => {
                    return (
                        <li key={i}>
                            {oldnote}
                            <button className="button" onClick={() => deleteNote(oldnote)}>Delete</button>
                        </li>
                    );

                })}
            </ul>
        </div>
    );
};

export default ApiNotes;