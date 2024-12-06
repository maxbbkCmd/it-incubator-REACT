import profileInfo from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  return (
    <div>
      <div className={profileInfo.info}>
        <img
          src='https://pbs.twimg.com/profile_banners/284131809/1591884155/1500x500'
          alt='img'
        />
      </div>
      <div className={profileInfo.description}>ava + desription</div>
    </div>
  );
};

export default ProfileInfo;