import myposts from "./MyPosts.module.css";
import Post from "./Post/Post";

const posts = [
  { id: 1, message: 'Say Hello!!!', likesCount: 42 },
  { id: 2, message: 'Say Hello!!!!!!!!!!!!!!', likesCount: 23 },
  { id: 3, message: 'Say Hello!!!!!!!!!!!!!!!!!', likesCount: 11 },
];

const postsElements = posts.map(post => <Post message={post.message} likesCount={post.likesCount} />)

const MyPosts = () => {
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
