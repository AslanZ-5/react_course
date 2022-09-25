import React, {useState} from "react";

function App() {
  const [likes,setLikes] = useState(0)
  function increment(){
    setLikes(likes + 1)
  }
  function decrement(){
    setLikes(likes - 1)
  }
  return (
    <div className="App">
      <h2>likes:{likes}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}

export default App;
