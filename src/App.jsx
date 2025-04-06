import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import notes from "./notes";

function renderNote(note) {
  return(
    <Note title={note.title} content={note.content}/>
  )
}

function App() {
  return(
    <>
      <Header />
      {notes.map(renderNote)}
      <Footer />
    </>
  )
}

export default App;