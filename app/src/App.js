import React, {useRef, useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem";
import Mybutton from "./components/UI/button/MyButton";
import Myinput from "./components/UI/input/Myinput";
import "./styles/App.css"
import PostList from "./components/PostList";
function App() {
  const [posts, setPost] = useState([
    {id:1,title:"javascript", body:"this text is about JavaScript"},
    {id:2,title:"Python-Django", body:"this text is about Python-Django"},
    {id:3,title:"Mysql", body:"this text is about Mysql"},
    {id:4,title:"Django Rest Framework", body:"this text is about Django Rest"}
  ])

  const [title, setTitle] = useState('ttt')
  const inputRef = useRef() 
  const addNewPost = (e) => {
    e.preventDefault()
    console.log(inputRef.current.value)
  }
  return (
    <div className="App">
      <form>
        <Myinput  
        
        type="text"
        placeholder="post title"
        value={title}
        onChange={e => setTitle(e.target.value)}
         />
        <Myinput ref={inputRef} type="text" placeholder="post description"/>
        <Mybutton onClick={addNewPost} > Create Post</Mybutton>
      </form>
      <PostList props={posts} title={"Languages Posts"}/>

     
    </div>
    
  );
  
}

export default App;
