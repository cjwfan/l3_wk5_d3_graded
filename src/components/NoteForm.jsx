import { useState } from 'react'

export default function NoteForm({ addNote }) {
    const [callType, setCallType] = useState("");
    const [reason, setReason] = useState("");
    const [actionTaken, setActionTaken] = useState("");

    function handleSubmit(event) {
      event.preventDefault();

      const newNote = {
        id: Date.now(),
        callType: callType,
        reason: reason,
        actionTaken: actionTaken,
      };

      addNote(newNote);

      setCallType("");
      setReason("");
      setActionTaken("");
    }

  return (
    <form className='formjsx' onSubmit={handleSubmit}>
      <label>
        Call Type
        <input
          type="text"
          value={callType}
          onChange={(e) => setCallType(e.target.value)}
        />
      </label>
      <label>
        Reason for Call
        <input
          type="text"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
      </label>
      <label>
        Action Taken
        <input
          type="text"
          value={actionTaken}
          onChange={(e) => setActionTaken(e.target.value)}
        />
      </label>
      <button>Submit</button>
    </form>
  );
}
