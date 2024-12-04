import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
  return (
    <div >
      <div>
        <img src='https://pbs.twimg.com/profile_banners/284131809/1591884155/1500x500' alt='img'/>
      </div>
      <div>ava + desription</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
