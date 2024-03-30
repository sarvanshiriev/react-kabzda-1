import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (

    <div className={s.item}>
      <img src="https://i0.wp.com/www.mobiflip.de/wp-content/uploads/2022/12/avatar-2-film-detail.jpg?fit=1200%2C960&ssl=1" />
      post 1
      <div>
      <span>like</span>
      </div>
    </div>
    )
}
export default Post;