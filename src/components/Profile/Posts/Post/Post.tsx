import React from 'react';
import s from './Post.module.css'

type PropsType = {
    message: string
    likeCount?: number
}

export const Post = ({ message, likeCount = 0 }: PropsType) => {
    return (
        <div className={s.post} >
            <img src="https://www.pngarts.com/files/11/Avatar-Transparent-Images.png" alt="" />
            <div className={s.postInfo}>
                <p>{message}</p>
                <p>like: <span>{likeCount}</span> </p>
            </div>
        </div>
    );
};

