import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header';
import { NavBar } from './components/Navbar/NavBar';
import { Profile } from './components/Profile/Profile';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Messages } from './components/Dialogs/Messages';
import { StatePropsType } from './components/Redux/store';

export const routes = {
  profile: '/profile',
  messages: '/messages/*',
  news: '/news',
  music: '/music',
  settings: '/settings'
}

type AppPropsType = {
  state:StatePropsType
  dispatch:(action: { type: string, newText: string }) => void
}

const App = ({ state,dispatch }: AppPropsType) => {
  return (
    <HashRouter>
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path={routes.profile} element={<Profile state={state} dispatch = {dispatch} />} />
            <Route path='/' element={<Navigate to={routes.profile} />} />
            <Route path={routes.messages} element={<Messages state={state} dispatch = {dispatch}/>} />
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
