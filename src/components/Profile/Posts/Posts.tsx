import React from 'react';
import s from './Posts.module.css'
import { Post } from './Post/Post'

export const Posts = () => {
    return (
        <div>
        My posts
        <div>
            <textarea></textarea>
            <button>Add post</button>
        </div>
        <Post message = 'Hi, how are you?' />
        <Post message = "It's my first post" likeCount={3}/>
      </div>
    );
};
