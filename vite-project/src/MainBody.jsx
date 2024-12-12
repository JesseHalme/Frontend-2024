import MyCourse from "./MyCourse";
import NoteCreator from "./NoteCreator";

function MainBody() {
  return (
    <div id="Main">
      <div id="note_container">
        <NoteCreator />
      </div>
      <div id="saved_notes">
        <MyCourse />
      </div>
    </div>

  );
}

export default MainBody;
