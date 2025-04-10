function Note ({id,title,content,deleteItem}) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={()=>deleteItem(id)}>DELETE</button>
    </div>
  )
}

export default Note;