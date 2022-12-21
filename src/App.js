import Button from "./Button";
import styles from "./App.module.css"
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(()=>{
    if(keyword !== "" && keyword.length > 5){
      console.log('SEARCH FOR ',keyword);
    }
  },[keyword])

  useEffect(()=>{
    console.log("'counter' changes.");
  },[counter])

  useEffect(()=>{
    console.log("'counter' & 'keyword' changes.");
  },[counter,keyword])

  return (
    <div>
      <h1 className={styles.title}>Welcome back!!!!</h1>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."/>
      <h2>{counter}</h2>
      <Button text=":)" click={onClick}/>
    </div>
  );
}

export default App;
