import React, { useRef } from 'react';
import s from './Messages.module.css'
import { Message } from './Message/Message';
import { User } from './User/User';
import { StatePropsType } from '../Redux/state';

type MessagesType = {
    state: StatePropsType
}

export const Messages = ({ state }: MessagesType) => {

    const newMessage = useRef<HTMLTextAreaElement>(null);

    const sendMessage = () => {
        if (newMessage.current) {
            alert(newMessage.current.value)
        }
    }

    return (
        <div className={s.messages}>
            <div className={s.usersList}>
                {state.dialogsPage.users.map(u => <User name={u.name} id={u.id} img={u.url} />)}
            </div>
            <div className={s.messagesList}>
                {state.dialogsPage.messages.map(m => <Message key={m.id} message={m.message} img='https://cdn-icons-png.flaticon.com/512/2202/2202112.png' />)}
            </div>
            <textarea ref = {newMessage} style={{}}></textarea>
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};
