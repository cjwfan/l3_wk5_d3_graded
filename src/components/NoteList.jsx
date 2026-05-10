

export default function NoteList({ notes }) {
  return (
    <div className="listjsx" >

    {notes.map((note) => (
        <div className="list-card" key={note.id}>
          <p>Call Type: {note.callType}</p>
          <p>Reason: {note.reason}</p>
          <p>Action Taken: {note.actionTaken}</p>
        </div>
      ))}
      </div>
  )
}
