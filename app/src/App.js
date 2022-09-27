import React, {useRef, useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem";
import Mybutton from "./components/UI/button/MyButton";
import Myinput from "./components/UI/input/Myinput";
import PostForm from "./components/PostForm";
import "./styles/App.css"
import PostList from "./components/PostList";
function App() {
  const [posts, setPosts] = useState([
    {id:1,title:"javascript", body:"this text is about JavaScript"},
    {id:2,title:"Python-Django", body:"this text is about Python-Django"},
    {id:3,title:"Mysql", body:"this text is about Mysql"},
    {id:4,title:"Django Rest Framework", body:"this text is about Django Rest"}
  ])
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  
 
 
  return (
    <div className="App">
      <PostForm create={createPost}/>
      <PostList props={posts} title={"Languages Posts"}/>

     
    </div>
    
  );
  
}

export default App;
