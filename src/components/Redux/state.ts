import { rerenderTree } from "../..";

export const state = {
    postsPage:{
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 12 },
            { id: 2, message: "It's my first post", likesCount: 11 },
        ],
        newPostText: 'denis'
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
}

export const addPost = (post:string) => {
    let newPost = {id:5,message:post,likesCount:0}
    state.postsPage.posts.push(newPost)
    rerenderTree();
    
}

export const changeNewPostText = (newText:string) => {
    state.postsPage.newPostText = newText
    rerenderTree();
}
