import React, {useState} from "react";
import Counter from "./components/Counter";

function App() {
  const [likes,setLikes] = useState(0)
  const [value,setValues] = useState('the text')
  function increment(){
    setLikes(likes + 1)
  }
  function decrement(){
    setLikes(likes - 1)
  }
  return (
    <div className="App">
      <h2>likes:{likes}</h2>
      <h2>{value}</h2>
      <input onChange={event => setValues(event.target.value)} value={value}></input>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <Counter/>
    </div>
    
  );
  
}

export default App;
