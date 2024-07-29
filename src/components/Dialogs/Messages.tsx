import React, { ChangeEvent, KeyboardEvent, useRef } from 'react';
import s from './Messages.module.css'
import { Message } from './Message/Message';
import { User } from './User/User';
import { DialogsPagePropsType } from '../Redux/store';

type MessagesType = {
    state: DialogsPagePropsType
    changeMessageText: (text: string) => void
    sendMessage: () => void
}
export const Messages = ({ state, changeMessageText, sendMessage }: MessagesType) => {

    const newMessage = useRef<HTMLTextAreaElement>(null);

    const sendMessageHandler = () => {
        sendMessage()

    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        changeMessageText(e.currentTarget.value)
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            sendMessageHandler()
        }
    }

    return (
        <div className={s.messages}>
            <div className={s.usersList}>
                {state.users.map(u => <User name={u.name} id={u.id} img={u.url} />)}
            </div>
            <div className={s.messagesList}>
                {state.messages.map(m => <Message key={m.id} message={m.message} img='https://cdn-icons-png.flaticon.com/512/2202/2202112.png' />)}
                <div className={s.messageForm}>
                    <textarea onKeyDown={onKeyDownHandler} onChange={onChangeHandler} value={state.newMessageText} ref={newMessage} style={{}}></textarea>
                    <button onClick={sendMessageHandler}>Отправить</button>
                </div>

            </div>


        </div>
    );
};
