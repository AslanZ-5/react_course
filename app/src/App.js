import React, {useRef, useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem";
import Mybutton from "./components/UI/button/MyButton";
import Myinput from "./components/UI/input/Myinput";
import "./styles/App.css"
import PostList from "./components/PostList";
function App() {
  const [posts, setPosts] = useState([
    {id:1,title:"javascript", body:"this text is about JavaScript"},
    {id:2,title:"Python-Django", body:"this text is about Python-Django"},
    {id:3,title:"Mysql", body:"this text is about Mysql"},
    {id:4,title:"Django Rest Framework", body:"this text is about Django Rest"}
  ])

  const [post, setPost] = useState({title:'',body:''})
  
 
  const addNewPost = (e) => {
    e.preventDefault()
    setPosts([...posts, {...post, id:Date.now()}])
    
    setPost({title:'',body:''})
   
  }
  return (
    <div className="App">
      <form>
        <Myinput  
        
        type="text"
        placeholder="post title"
        value={post.title}
        onChange={e => setPost({...post,title:e.target.value})}
         />
        <Myinput 
        
         type="text" 
         placeholder="post description"
         value={post.body}
         onChange={e => setPost({...post,body:e.target.value})}

         />
        <Mybutton onClick={addNewPost} > Create Post</Mybutton>
      </form>
      <PostList props={posts} title={"Languages Posts"}/>

     
    </div>
    
  );
  
}

export default App;
