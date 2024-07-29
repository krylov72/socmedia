
import { DialogsPagePropsType } from "./store"

const initialState = {
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' },
    ],
    newMessageText: '',
    users: [
        { id: 1, name: 'Denis', url: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
        { id: 2, name: 'Asya', url: '   https://cdn-icons-png.flaticon.com/512/4322/4322991.png' },
        { id: 3, name: 'Anatoliy', url: 'https://cdn-icons-png.flaticon.com/512/924/924915.png' },
        { id: 4, name: 'Misha', url: 'https://cdn-icons-png.flaticon.com/512/4140/4140037.png' },
        { id: 5, name: 'Evgeniy', url: 'https://cdn-icons-png.flaticon.com/512/1308/1308845.png' },
    ]
}
export const dialogsReducer = (state:DialogsPagePropsType = initialState,action:{type:string,newText:string}) => {
    switch(action.type) {
        case 'SEND-MESSAGE':{
            let newMessage = {id:6,message: state.newMessageText}
            return {...state,messages:[...state.messages,newMessage],newMessageText:''}
        }
        break;
        case 'CHANGE-MESSAGE-TEXT':{
            return {...state,newMessageText:state.newMessageText = action.newText}
        }
        break;
        default:{
            return state
        }
    }

}

export const sendMessageAC = () => {
    return {
        type: 'SEND-MESSAGE',
        newText: ''
    }
}

export const changeMessageTextAC = (text: string) => {
    return {
        type: 'CHANGE-MESSAGE-TEXT',
        newText: text
    }
}