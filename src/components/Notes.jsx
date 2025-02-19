import React, { useEffect, useState } from 'react'
import InputForm from './InputForm'
import NotesList from './NotesList';

const Notes = () => {
  const [notes,setNotes] = useState([]);
  const [update, setUpdateNote] = useState(null);

  useEffect(()=>{
    const myNotes = JSON.parse(localStorage.getItem("notes"));
    setNotes(myNotes)
  },[])

  useEffect(()=>{
    localStorage.setItem("notes", JSON.stringify(notes));
  },[notes])

  const addNewNote = (newNotes) =>{
    setNotes([...notes,newNotes])
  }

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

    const updateNote = (updatedNote) => {
      console.log("updated note", updatedNote)
      setNotes(
        notes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
      )
      setUpdateNote(null);
    };
  return (
    <div className="bg-stone-100 min-h-screen">
      <header className="w-full bg-stone-900 py-2 text-4xl font-bold text-center text-white">
        Peek Me
      </header>
      <div
        className="max-w-5xl p-2 mx-auto
       "
      >
        <InputForm addNewNote={addNewNote} editNote={update}  updateNote={updateNote} />
        <NotesList notes={notes} deleteNote={deleteNote} updateNote={setUpdateNote}  />
      </div>
    </div>
  );
}

export default Notes
