
import { rerenderTree } from "../..";

export type PostsPropsType = {
    id:number
    message:string
    likesCount:number
}

export type PostsPagePropsType = {
    posts: PostsPropsType[]
    newPostText:string
}

export type MessagesPropsType = {
    id:number,
    message:string
}

export type UsersPropsType = {
    id:number
    name:string
    url:string
}

export type DialogsPagePropsType = {
    messages: MessagesPropsType[]
    users: UsersPropsType[]
}

export type StatePropsType = {
    postsPage: PostsPagePropsType
    dialogsPage: DialogsPagePropsType
}

export type StorePropsType = {
    _state:StatePropsType
    getState: () => StatePropsType
    dispatch: (action:{type:string,newText?:string}) => void
}

export let store:StorePropsType = {
    _state:{
        postsPage:{
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 12 },
                { id: 2, message: "It's my first post", likesCount: 11 },
            ],
            newPostText: ''
        },
        dialogsPage:{
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How are you?' },
                { id: 3, message: 'Yo' },
                { id: 4, message: 'Yo' },
                { id: 5, message: 'Yo' },
            ],
            users: [
                { id: 1, name: 'Denis',url:"https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
                { id: 2, name: 'Asya',url: '   https://cdn-icons-png.flaticon.com/512/4322/4322991.png'},
                { id: 3, name: 'Anatoliy',url: 'https://cdn-icons-png.flaticon.com/512/924/924915.png'},
                { id: 4, name: 'Misha',url:'https://cdn-icons-png.flaticon.com/512/4140/4140037.png' },
                { id: 5, name: 'Evgeniy',url: 'https://cdn-icons-png.flaticon.com/512/1308/1308845.png'},
            ]
        }
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if(action.type === 'ADD-POST') {
            let newPost = {id:5,message:this._state.postsPage.newPostText,likesCount:0}
            this._state.postsPage.posts.push(newPost)
            this._state.postsPage.newPostText = ''
            rerenderTree()
        } else if (action.type === 'CHANGE-NEW-POST-TEXT') {
            if(action.newText)
            this._state.postsPage.newPostText = action.newText;
            
            
            rerenderTree()
        }
    }

}






