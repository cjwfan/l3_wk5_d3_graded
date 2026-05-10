import { useState } from 'react'

import './App.css'
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

function App() {
  
  const [notes, setNotes] = useState([]);
  function addNote(newNote) {
    setNotes([...notes, newNote]);
  }


  return (
    <>
    <div className='app'>

  <h1 className='title'>After Call Notes</h1>
  <NoteForm addNote={addNote} />
  <NoteList notes={notes} />
    </div>
    </>
  )
}

export default App
