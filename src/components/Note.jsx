function Note () {
  const title = "Title of Note";
  const content = "Content of Note"
  
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  )
}

export default Note;