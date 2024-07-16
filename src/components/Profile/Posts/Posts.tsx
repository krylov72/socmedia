import React from 'react';
import s from './Posts.module.css'
import { Post } from './Post/Post'

export const Posts = () => {
    return (
        <div className={s.posts}>
        <h3>My posts</h3>
        <div className={s.newPost}>
            <textarea></textarea>
            <button>Add post</button>
        </div>
        <Post message = 'Hi, how are you?' />
        <Post message = "It's my first post" likeCount={3}/>
      </div>
    );
};
