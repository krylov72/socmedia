import React from 'react';
import s from './Messages.module.css'
import { NavLink } from 'react-router-dom';

export type UserType = {
    name: string
    id: number
}

export type MessageType = {
    message: string
}

const User = ({ name, id }: UserType) => {
    return (
        <div >
            <NavLink to={`/messages/${id}`} className={({ isActive, isPending }) =>
                isActive ? s.active : s.dialog
            } >
                {name}
            </NavLink>
        </div>
    )
}

const Message = ({ message }: MessageType) => {
    return (
        <div className={s.message}>
            {message}
        </div>
    )
}

export const Messages = ({ }) => {
let usersData = [
    {id:1,name:'Denis'},
    {id:2,name:'Asya'},
    {id:3,name:'Anatoliy'},
    {id:4,name:'Misha'},
    {id:5,name:'Evgeniy'},
]

let messagesData = [
    {id:1,message:'Hi'},
    {id:2,message:'How are you?'},
    {id:3,message:'Yo'},
    {id:4,message:'Yo'},
    {id:5,message:'Yo'},
]

    return (
        <div className={s.messages}>
            <div className={s.usersList}>
                <User name={usersData[0].name} id={usersData[0].id} />
                <User name={usersData[1].name} id={usersData[1].id} />
                <User name={usersData[2].name} id={usersData[2].id} />
                <User name={usersData[3].name} id={usersData[3].id} />
                <User name={usersData[4].name} id={usersData[4].id} />
            </div>
            <div className={s.messagesList}>
              <Message message={messagesData[0].message}/>
              <Message message={messagesData[1].message}/>
              <Message message={messagesData[2].message}/>
            </div>
        </div>
    );
};
