
import { PostsPagePropsType } from "./store"


const initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 11 },
    ],
    newPostText: ''
}
export const profileReducer = (state:PostsPagePropsType = initialState,action:{type:string,newText:string}) => {
        switch(action.type) {
            case 'ADD-POST':{
                let newPost = {id:5,message: state.newPostText,likesCount:0}
                return {...state,posts:[...state.posts,newPost],newPostText:''}
            }
            case 'CHANGE-NEW-POST-TEXT':{
                return {...state,newPostText:state.newPostText = action.newText}
            }
            default:{
                return state
            }
        }
        
}

export const addPostAC = () => {
    return {
        type: 'ADD-POST',
        newText: ''
    }
}

export const changeNewPostTextAC = (text: string) => {
return {
    type: 'CHANGE-NEW-POST-TEXT',
    newText: text
}
}