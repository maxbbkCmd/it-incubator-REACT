import React from 'react';
import myposts from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  const postsElements = props.posts.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />)

  const newPostElement = React.createRef();

  const addPost = () => {
    let a = newPostElement.current.value;
    alert(a)
  };

  return (
    <div className={myposts.postBlock}>
      <h3>My posts</h3>

      <div className={myposts.addBlock}>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>

      <div className={myposts.newPosts}>New posts</div>
      <div className={myposts.posts}>
        {postsElements}

      </div>
    </div>
  );
};

export default MyPosts;
