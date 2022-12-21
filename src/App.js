import { useState } from "react";


function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value)
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ""){
      return;
    }
    setToDos(currentArray => [toDo, ...currentArray]);
    //setToDos(([]) => [toDo]);
    setToDo("");
  }
  console.log(toDos)
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write yout to do..."/>
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App; 
