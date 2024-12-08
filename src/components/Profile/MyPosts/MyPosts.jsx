import myposts from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  const postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />)

  return (
    <div className={myposts.postBlock}>
      <h3>My posts</h3>

      <div className={myposts.addBlock}>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
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
