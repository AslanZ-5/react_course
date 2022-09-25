import React, {useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem";
import "./styles/App.css"
function App() {
  
  return (
    <div className="App">
      <PostItem post={{id:1,title:"javascript", body:"this text is about JavaScript"}}/>
      <PostItem post={{id:2,title:"Python-Django", body:"this text is about Python-Django"}}/>
      <PostItem post={{id:3,title:"Mysql", body:"this text is about Mysql"}}/>
      <PostItem post={{id:4,title:"Django Rest Framework", body:"this text is about Django Rest"}}/>
     
    </div>
    
  );
  
}

export default App;
