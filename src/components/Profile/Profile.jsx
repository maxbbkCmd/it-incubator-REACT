import profile from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

  return (
    <div className={profile.content}>
      <h2>Profile.jsx</h2>
      <ProfileInfo />
      <MyPosts posts={props.posts} addPost={props.addPost} />
    </div>
  );
};

export default Profile;
