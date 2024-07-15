import React from 'react';
import s from './Post.module.css'

type PropsType = {
    message:string
    likeCount?:number
}

export const Post = ({message,likeCount = 0}:PropsType) => {
    return (
        <div className={s.post} >
            <img src="https://avatars.mds.yandex.net/i?id=80f47dad1ad4ca5e92484431eea651cd-5258253-images-thumbs&n=13" alt="" />
            <p>{message}</p>
            <p>like: <span>{likeCount}</span> </p> 
        </div>
    );
};

