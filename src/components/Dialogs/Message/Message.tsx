import s from '../Messages.module.css'

export type MessageType = {
    message: string
    img:string
}

export const Message = ({ message,img}: MessageType) => {
    return (
        <div className={s.message}>
            <img src={img} alt="" />
            <p>{message}</p>
        </div>
    )
}