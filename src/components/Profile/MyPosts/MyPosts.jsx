import myposts from "./MyPosts.module.css";
import Post from '../MyPosts/MyPost/Post'

const Profile = () => {
  return (
    <div>
      My posts
      <div>New posts</div>
      <div className={myposts.posts}>
        <Post />
      </div>
    </div>
  );
};

export default Profile;
