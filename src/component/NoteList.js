
import React from "react";
import Notebox from "./Notebox";
import AddNote from "./AddNote";

export default function Note({ note, handleAddNote, removeHandler, mode }) {
    return (
        <>
            <div className="note_list">
                {note.map((note, i) => <Notebox key={i} index={i} id={note.id} text={note.text} date={note.date} time={note.time} handleAddNote={handleAddNote} removeHandler={removeHandler} mode={mode} />)}
                <AddNote handleAddNote={handleAddNote} mode={mode} />
            </div>
        </>
    );
}