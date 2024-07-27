


import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";

export type PostsPropsType = {
    id: number
    message: string
    likesCount: number
}

export type PostsPagePropsType = {
    posts: PostsPropsType[]
    newPostText: string
}

export type MessagesPropsType = {
    id: number,
    message: string
}

export type UsersPropsType = {
    id: number
    name: string
    url: string
}

export type DialogsPagePropsType = {
    messages: MessagesPropsType[]
    users: UsersPropsType[]
    newMessageText: string
}

export type StatePropsType = {
    postsPage: PostsPagePropsType
    dialogsPage: DialogsPagePropsType
}

export type StorePropsType = {
    _state: StatePropsType
    getState: () => StatePropsType
    dispatch: (action: { type: string, newText: string }) => void
    subscribe:(observer:any) => void,
    _rerenderTree: (state:StatePropsType) => void
}



export let store: StorePropsType = {
    _state: {
        postsPage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 12 },
                { id: 2, message: "It's my first post", likesCount: 11 },
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
    },
    _rerenderTree(state:StatePropsType) {
        console.log('Changed');
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.postsPage = profileReducer(this._state.postsPage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._rerenderTree(this._state)

    },
    subscribe(observer:()=>void) {
        this._rerenderTree = observer
    }

}










