import Note from "./Note";
import PrefefinedNotes from "./courcsenotes/PrefefinedNotes";

function MyCourse() {
    const peeps = PrefefinedNotes((state) => state.peeps);
    return (
        <div>
            <div id="text_savednotes">
            <h1>Saved Notes</h1>
            </div>
            <div id="line"></div>
            <ul>
                {
                    peeps.map((peep, i) => {
                        return (
                            <Note key={i} coursename={peep.coursename} script={peep.script} />
                        );
                    })
                }
            </ul>
        </div>

    );
}

export default MyCourse;