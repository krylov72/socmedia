import React from 'react';
import s from './Posts.module.css'
import { Post } from './Post/Post'

type PostsPropsType = {
    posts:Array<{id:number,message:string,likesCount:number}>
}
  
export const Posts = ({posts}:PostsPropsType) => {

  
    return (
        <div className={s.posts}>
        <h3>My posts</h3>
        <div className={s.newPost}>
            <textarea></textarea>
            <button>Add post</button>
        </div>
        {posts.map(p => <Post key={p.id} message={p.message} likeCount={p.likesCount} />)}
      </div>
    );
};
