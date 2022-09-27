import React, {useRef, useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem";
import Mybutton from "./components/UI/button/MyButton";
import Myinput from "./components/UI/input/Myinput";
import PostForm from "./components/PostForm";
import "./styles/App.css"
import PostList from "./components/PostList";
import MySelect from "./components/UI/select/MySelect";
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

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  
 
 
  return (
    <div className="App">
     
      <PostForm create={createPost}/>
      <div>
        <MySelect 
        defaultValue="Sort"
        options={[
          {value:"title", name: 'By Title'},
          {value:"body", name:"By description"}
        ]}
        />
        </div>
      {posts.length !== 0
          ?       <PostList remove={removePost} props={posts} title={"Languages Posts"}/>
          :<h1 style={{textAlign: 'center'}}> Posts hasn't been found</h1>
        }

     
    </div>
    
  );
  
}

export default App;
