import { useState } from "react";

export default function CreateArea({onAddNote}) {
  const [note,setNote] = useState({
    title:"",
    content:""
  })

  function handleAddNote() {
    onAddNote(note);
    setNote({
      title:"",
      content:""
    });
  }

  return (
    <div>
      <form onSubmit={evt=>evt.preventDefault()}>
        <input 
          onChange={evt=>setNote({...note,title:evt.target.value})} 
          name="title" 
          placeholder="Title" 
          value={note.title}
        />
        <textarea 
          onChange={evt=>setNote({...note,content:evt.target.value})} 
          name="content" 
          placeholder="Take a note..." 
          rows="3" 
          value={note.content}
        />
        <button type="submit" onClick={handleAddNote}>Add</button>
      </form>
    </div>
  );
}
