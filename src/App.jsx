import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import { useState } from "react";

// const note1 = {title:"note1 title",content:"note1 content"}
// const note2 = {title:"note2 title",content:"note2 content"}
// const note3 = {title:"note3 title",content:"note3 content"}
//let noteList = [note1,note2,note3]

function App() {
  const [noteList,setNoteList] = useState([{
    title:"note1 title",
    content:"note1 content"
  }])

  function addToList(newNote) {
    setNoteList([...noteList,newNote])
  }
  
  return(
    <>
      <Header />
      <CreateArea onAddNote={addToList}/>
      {noteList.map((note,index)=><Note key={index} title={note.title} content={note.content} />)}
      <Footer />
    </>
  )
}

export default App;

//CHALLENGE:
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.

//This is the end result you're aiming for:
//https://pogqj.csb.app/