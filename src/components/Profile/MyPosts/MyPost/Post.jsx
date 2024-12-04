import post from './Post.module.css'

const Post = () => {
  return (
    <div className={post.item }>
      <img src='https://static.life.ru/posts/2018/12/1179556/bb90c59f5d238682301fca889292aa86.jpg'alt='img'/>
      Post 1
      <div>
        <span>Like</span>
      </div>
    </div>
  );
};

export default Post;
