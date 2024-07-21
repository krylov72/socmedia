import { NavLink } from 'react-router-dom'
import s from '../Messages.module.css'

export type UserType = {
    name: string
    id: number
    img:string
}


export const User = ({ name, id,img }: UserType) => {
    return (
        <div className={s.userDialog}>
            <img src={img} alt="" />
            <NavLink to={`/messages/${id}`} className={({ isActive, isPending }) =>
                isActive ? s.active : s.dialog
            } >
                {name}
            </NavLink>
        </div>
    )
}