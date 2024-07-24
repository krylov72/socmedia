
import s from './Posts.module.css'
import { Post } from './Post/Post'
import { ChangeEvent, useRef } from 'react';

type PostsPropsType = {
    posts:{
        posts:Array<{id:number,message:string,likesCount:number}>
        newPostText:string
      }
      dispatch: (action:{type:string,newText:string}) => void
}

export const Posts = ({ posts,dispatch}: PostsPropsType) => {
    let newPost = useRef<HTMLTextAreaElement | null>(null)

    
    const addPostHandler = () => {
        if(newPost.current) {
            dispatch({type:'ADD-POST',newText:''})
        }
    }
    const onChangeText = (e:ChangeEvent<HTMLTextAreaElement>) => {

        if(newPost.current){
           dispatch({type:'CHANGE-NEW-POST-TEXT',newText:e.currentTarget.value}) 
        }
        
    }
    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div className={s.newPost}>
                <textarea ref = {newPost} onChange={onChangeText} value={posts.newPostText}></textarea>
                <button onClick={addPostHandler}>Add post</button>
            </div>
            {posts.posts.map(p => <Post key={p.id} message={p.message} likeCount={p.likesCount} />)}
        </div>
    );
};
