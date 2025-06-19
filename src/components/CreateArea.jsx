import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
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
        <Fab type="submit" onClick={handleAddNote}><AddIcon /></Fab>
      </form>
    </div>
  );
}
