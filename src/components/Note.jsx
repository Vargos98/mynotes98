import React from "react";
const btn={
  
  border: 'block',
  textAlign: 'center',
  fontSize: '0.8rem',
  color:'white',
  borderRadius: '50%',
  backgroundColor : 'purple',


}
function Note(props) {
  
  function handleClick(){
    props.onDelete(props.id)
  }
  
  
  
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button style={btn} onClick={handleClick}>Del</button>
    </div>
  );
}

export default Note;