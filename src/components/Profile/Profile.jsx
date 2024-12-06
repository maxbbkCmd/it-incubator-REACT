import profile from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = () => {
  return (
    <div className={profile.content}>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};

export default Profile;
