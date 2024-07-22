import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header';
import { NavBar } from './components/Navbar/NavBar';
import { Profile } from './components/Profile/Profile';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Messages } from './components/Dialogs/Messages';

export const routes = {
  profile: '/profile',
  messages:'/messages/*',
  news:'/news',
  music:'/music',
  settings:'/settings'
}

type AppPropsType = {
  state: {
    postsPage:{
      posts:Array<{id:number,message:string,likesCount:number}>
      newPostText:string
    },
    dialogsPage:{
      messages:Array<{id:number,message:string}>,
      users:Array<{id:number,name:string,url:string}>,
    }
  }
  addPost: (post:string) => void
  rerenderTree: () => void
  changeNewPostText:(newText:string) => void
}

const App = ({state,addPost,rerenderTree,changeNewPostText}:AppPropsType)=> {
  return (
    <HashRouter>
    <div className='app-wrapper'>
      <Header />
      <NavBar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path={routes.profile} element={<Profile posts={state.postsPage} addPost = {addPost} rerenderTree={rerenderTree} changeNewPostText={changeNewPostText}/>} />
          <Route  path='/' element={<Navigate to={routes.profile}/>}/>
          <Route path={routes.messages} element={<Messages users={state.dialogsPage.users} messages = {state.dialogsPage.messages}/>}  />
          <Route path={routes.news} element={''} />
          <Route path={routes.music} element={''} />
          <Route path={routes.settings} element={''} />
        </Routes>
        {/* <Profile /> */}
      </div>
    </div>
    </HashRouter>
    
  );
}


export default App;
