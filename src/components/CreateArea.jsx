import { useState } from "react";

export default function CreateArea() {
  const [note,setNote] = useState({
    title:"",
    content:""
  })

  return (
    <div>
      <form>
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
        <button>Add</button>
      </form>
    </div>
  );
}
