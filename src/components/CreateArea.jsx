import { useState } from "react";
let idCounter = 0;

export default function CreateArea({onAddNote}) {
  const [note,setNote] = useState({
    id:0,
    title:"",
    content:""
  })

  function handleAddNote(evt) {
    note.id = idCounter;
    onAddNote(note);
    setNote({
      title:"",
      content:""
    });
    idCounter++;
    evt.preventDefault()
  }

  return (
    <div>
      <form className="create-note">
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
