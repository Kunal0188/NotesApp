
import React from "react";

export default function Notesbox({ text, date, time, removeHandler, index, mode }) {

    return (
        <>
            <div className="notes_box" style={{ backgroundColor: mode === "light" ? "aquamarine" : "rgb(30, 120, 125)", color: mode === "light" ? "black" : "white" }}>
                <span>{text}</span>
                <div className="notes_footer">
                    <span>{date}     {time}</span>
                    <span>
                        <i className="fa-solid fa-trash" onClick={(e) => removeHandler(index)} ></i>
                    </span>
                </div>
                {/* <i className="fa-solid fa-pen-to-square"></i> */}
            </div>
        </>
    );
}