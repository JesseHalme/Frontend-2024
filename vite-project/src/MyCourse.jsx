import Note from "./Note";
import PrefefinedNotes from "./courcsenotes/PrefefinedNotes";

function MyCourse () {
    const peeps = PrefefinedNotes((state) => state.peeps);
    return (
        <ul>
            {
                peeps.map((peep, i) => {
                    return(
                        <Note key={i} coursename={peep.coursename} script={peep.script}/>
                    );
                })
            }
        </ul>
    );
}

export default MyCourse;