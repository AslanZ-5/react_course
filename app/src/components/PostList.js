import React from "react";
import PostItem from "./PostItem";

const PostList = ({props, title, remove }) => {
    return (
        <div>
<h1 style={{textAlign: 'center'}}>{title}</h1>
      {props.map((post, index) => <PostItem remove={remove} number={index + 1} post={post} key={post.id}/>)}
        </div>
    );
};

export default PostList;