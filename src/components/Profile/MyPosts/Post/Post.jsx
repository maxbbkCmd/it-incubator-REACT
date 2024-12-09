import post from './Post.module.css'

const Post = ({message, likesCount}) => {
  return (
    <div className={post.item}>
        <h2>Post.jsx</h2>
      <img src='https://static.life.ru/posts/2018/12/1179556/bb90c59f5d238682301fca889292aa86.jpg'alt='img'/>
      {message}
      <div>
        <span>{likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
