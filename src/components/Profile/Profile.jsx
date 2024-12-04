import profile from './Profile.module.css';

const Profile = () => {
  return (
    <div className={profile.content}>
      <div>
        <img src='https://pbs.twimg.com/profile_banners/284131809/1591884155/1500x500' alt='img'/>
      </div>
      <div>ava + desription</div>
      <div className={profile.posts}>
        My posts
        <div className={profile.item}>New post</div>
        <div className={profile.item}>post 1</div>
        <div className={profile.item}>post 2</div>
      </div>
    </div>
  );
};

export default Profile;
