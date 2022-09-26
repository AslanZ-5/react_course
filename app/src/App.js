import React, {useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem";
import Mybutton from "./components/UI/button/MyButton";
import "./styles/App.css"
import PostList from "./components/PostList";
function App() {
  const [posts, setPost] = useState([
    {id:1,title:"javascript", body:"this text is about JavaScript"},
    {id:2,title:"Python-Django", body:"this text is about Python-Django"},
    {id:3,title:"Mysql", body:"this text is about Mysql"},
    {id:4,title:"Django Rest Framework", body:"this text is about Django Rest"}
  ])
  
  return (
    <div className="App">
      <form>
        <input type="text" placeholder="post title"/>
        <input type="text" placeholder="post description"/>
        <Mybutton disabled> Create Post</Mybutton>
      </form>
      <PostList props={posts} title={"Languages Posts"}/>

     
    </div>
    
  );
  
}

export default App;
