import React from "react";
import { useState } from 'react';
import Mybutton from "./UI/button/MyButton";
import Myinput from "./UI/input/Myinput";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title:'',body:''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title:'',body:''})
       
      }
    return (
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
    )
}

export default PostForm;