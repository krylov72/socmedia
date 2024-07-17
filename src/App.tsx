import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header';
import { NavBar } from './components/Navbar/NavBar';
import { Profile } from './components/Profile/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Messages } from './components/Dialogs/Messages';

export const routes = {
  profile: '/profile',
  messages:'/messages',
  news:'/news',
  music:'/music',
  settings:'/settings'
}


function App() {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <NavBar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path={routes.profile} element={<Profile/>} />
          <Route path={routes.messages} element={<Messages/>} />
          <Route path={routes.news} element={<Profile/>} />
          <Route path={routes.music} element={<Profile/>} />
          <Route path={routes.settings} element={<Profile/>} />
        </Routes>
        {/* <Profile /> */}
      </div>
    </div>
    </BrowserRouter>
    
  );
}


export default App;
