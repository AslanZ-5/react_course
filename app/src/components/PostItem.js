import Mybutton from "./UI/button/MyButton"
const PostItem = function(props){
    return (
        <div className="post">
      <div className="post-content">
        
        <strong> {props.number}. {props.post.title}</strong>
        <div> 
          {props.post.body}
        </div>
      </div>

      <div className="post-btn">
        <Mybutton onClick={()=> props.remove(props.post)}> Delete</Mybutton>
      </div>
      </div>
    )
}

export default PostItem