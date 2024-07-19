import React from 'react';
import s from './Posts.module.css'
import { Post } from './Post/Post'

export const Posts = () => {

    let postsData = [
        {id:1,message:'Hi, how are you?',likesCount:12},
        {id:2,message:"It's my first post",likesCount:11},
    ]
    return (
        <div className={s.posts}>
        <h3>My posts</h3>
        <div className={s.newPost}>
            <textarea></textarea>
            <button>Add post</button>
        </div>
        <Post message = {postsData[0].message} likeCount={postsData[0].likesCount} />
        <Post message = {postsData[1].message} likeCount={postsData[1].likesCount}/>
      </div>
    );
};
