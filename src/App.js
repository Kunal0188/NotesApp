
import { useEffect, useState } from 'react';
import './App.css';
import NoteList from "./component/NoteList";
import Search from './component/Search';

function App() {
  const [note, setNote] = useState([]);
  const [search, setSearch] = useState("");
  const [mode, setMode] = useState("light");

  const addNotes = (text, i) => {
    let date = new Date().toLocaleDateString();
    let time = new Date().toLocaleTimeString();
    const newNote = {
      id: i,
      text: text,
      date: date,
      time: time,
    }
    const newNotes = [...note, newNote];
    setNote(newNotes);
    localStorage.setItem("react-notes-app-data", JSON.stringify(newNotes));
  }

  const removeHandler = (key) => {
    let latestList = [...note];
    latestList.splice(key, 1);
    setNote(latestList);
    localStorage.setItem("react-notes-app-data", JSON.stringify(latestList));
  }

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if (savedNotes) {
      setNote(savedNotes);
    }
  }, []);

  const darkMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = ("rgb(10, 60, 75)");
      document.body.style.color = ("white");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = ("rgb(220, 243, 216)");
      document.body.style.color = ("black");
    }
  }

  return (
    <div className={`App ${darkMode}`}>
      <div className="container">
        <div className="Heading"> Notes </div>
        <Search handleSearch={setSearch} mode={mode} darkMode={darkMode} />
        <NoteList note={note.filter((notes) => notes.text.toLowerCase().includes(search))} handleAddNote={addNotes} removeHandler={removeHandler} mode={mode} />
      </div>
    </div>
  );
}

export default App;
