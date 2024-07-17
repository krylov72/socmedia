import React from 'react';
import s from './Messages.module.css'

export const Messages = ({ }) => {
    return (
        <div className={s.messages}>
            <div className={s.usersList}>
                <div className={s.dialog + ' ' + s.active}>
                    Denis
                </div>
                <div className={s.dialog}>
                    Asya
                </div>
                <div className={s.dialog}>
                    Misha
                </div>
                <div className={s.dialog}>
                    Anatoliy
                </div>
                <div className={s.dialog}>
                    Evgeniy
                </div>
            </div>
            <div className={s.messagesList}>
                <div className={s.message}>
                    Hi
                </div>
                <div className={s.message}>
                    Hello
                </div>
                <div className={s.message}>
                    How Are you?
                </div>
            </div>
        </div>
    );
};
