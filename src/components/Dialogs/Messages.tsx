import React, { ChangeEvent, KeyboardEvent, useRef } from 'react';
import s from './Messages.module.css'
import { Message } from './Message/Message';
import { User } from './User/User';
import { changeMessageTextAC, sendMessageAC, StatePropsType } from '../Redux/state';

type MessagesType = {
    state: StatePropsType
    dispatch: (action: { type: string, newText: string }) => void
}

export const Messages = ({ state, dispatch }: MessagesType) => {

    const newMessage = useRef<HTMLTextAreaElement>(null);

    const sendMessageHandler = () => {
            dispatch(sendMessageAC())
            
    }

    const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(changeMessageTextAC(e.currentTarget.value))
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            sendMessageHandler()
        }
    }

    return (
        <div className={s.messages}>
            <div className={s.usersList}>
                {state.dialogsPage.users.map(u => <User name={u.name} id={u.id} img={u.url} />)}
            </div>
            <div className={s.messagesList}>
                {state.dialogsPage.messages.map(m => <Message key={m.id} message={m.message} img='https://cdn-icons-png.flaticon.com/512/2202/2202112.png' />)}
                <div className={s.messageForm}>
                    <textarea onKeyDown={onKeyDownHandler} onChange={onChangeHandler} value={state.dialogsPage.newMessageText} ref={newMessage} style={{}}></textarea>
                    <button onClick={sendMessageHandler}>Отправить</button>
                </div>

            </div>


        </div>
    );
};
