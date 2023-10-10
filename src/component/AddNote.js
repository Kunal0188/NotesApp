
import React, { useState } from "react";

export default function AddNote({ handleAddNote, mode }) {
    const [noteText, setNoteText] = useState("");
    const characterLimit = 500;

    const handleChange = (e) => {
        setNoteText(e.target.value);
        const text = e.target.value;
        if (text.length <= characterLimit) {
            setNoteText(text);
        } else {
            setNoteText(text.slice(0, characterLimit));
        }
    }

    const handleClick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText("");
        }
    }

    return (
        <>
            <div className="notes_box new_note" style={{ backgroundColor: mode === "light" ? "rgb(255, 205, 100)" : "rgb(60, 12, 60)", color: mode === "dark" ? "white" : "black" }}>
                <textarea rows="5" cols="10" placeholder="Type to add a note..." value={noteText} onChange={handleChange} style={{ color: mode === "dark" ? "white" : "black" }}></textarea>
                <div className="notes_footer">
                    <span>{characterLimit - noteText.length} Remaining</span>
                    <button className="save" onClick={handleClick}>Save</button>
                </div>
            </div>
        </>
    );
}