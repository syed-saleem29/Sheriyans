import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [notes, setNotes] = useState([]);

  function fetchNotes() {
    axios.get("https://notes-vawd.onrender.com/api/notes").then((res) => {
      console.log(res.data.notes);
      setNotes(res.data.notes);
    });
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  function submitHandler(e) {
    e.preventDefault();

    const { title, description } = e.target.elements;

    axios
      .post("https://notes-vawd.onrender.com/api/notes", {
        title: title.value,
        description: description.value,
      })
      .then(() => {
        fetchNotes();
        title.value = "";
        description.value = "";
      })

  }
  
  function handleDeleteNote(noteId){
    axios.delete("https://notes-vawd.onrender.com/api/notes/"+noteId)
    .then(res=>{
      console.log(res.data)
      fetchNotes()
      
    })
  }

  return (
    <>
      <form className="note-create-form" onSubmit={submitHandler}>
        <input name="title" type="text" placeholder="Enter Title" />
        <input name="description" type="text" placeholder="Enter Description" />
        <button>Create Note </button>
      </form>
      <div className="notes">
        {notes.map((note, idx) => {
          return (
            <div className="note" key={idx}>
              <h1>{note.title}</h1>
              <p>{note.description}</p>
              <button
                onClick={() => {
                  handleDeleteNote(note._id);
                }}
                className="delete"
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
