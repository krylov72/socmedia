import React from 'react';
import s from './Messages.module.css'
import { Message } from './Message/Message';
import { User } from './User/User';

type MessagesType = {
    users: Array<{ id: number, name: string, url: string }>
    messages: Array<{ id: number, message: string }>
}

export const Messages = ({ users, messages }: MessagesType) => {


    return (
        <div className={s.messages}>
            <div className={s.usersList}>
                {users.map(u => <User name={u.name} id={u.id} img={u.url} />)}
            </div>
            <div className={s.messagesList}>
                {messages.map(m => <Message key = {m.id }message={m.message} img='https://cdn-icons-png.flaticon.com/512/2202/2202112.png'  />)}
            </div>
        </div>
    );
};
