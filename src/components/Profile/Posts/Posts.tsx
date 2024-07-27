
import s from './Posts.module.css'
import { Post } from './Post/Post'
import { ChangeEvent, KeyboardEvent, useRef } from 'react';
import { addPostAC, changeNewPostTextAC } from '../../Redux/profileReducer';

type PostsPropsType = {
    posts:{
        posts:Array<{id:number,message:string,likesCount:number}>
        newPostText:string
      }
      dispatch: (action:{type:string,newText:string}) => void
}



export const Posts = ({ posts,dispatch}: PostsPropsType) => {
    let newPost = useRef<HTMLTextAreaElement>(null)

    
    const addPostHandler = () => {
        if(newPost.current) {
            dispatch(addPostAC())
        }
    }
    const onChangeText = (e:ChangeEvent<HTMLTextAreaElement>) => {
        if(newPost.current){
           dispatch(changeNewPostTextAC(e.currentTarget.value)) 
        }
    }
    
    const onKeyDownHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            addPostHandler()
        }
    }
    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div className={s.newPost}>
                <textarea onKeyDown={onKeyDownHandler} ref = {newPost} onChange={onChangeText} value={posts.newPostText}></textarea>
                <button onClick={addPostHandler}>Add post</button>
            </div>
            {posts.posts.map(p => <Post key={p.id} message={p.message} likeCount={p.likesCount} />)}
        </div>
    );
};
