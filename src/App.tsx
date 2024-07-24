import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header';
import { NavBar } from './components/Navbar/NavBar';
import { Profile } from './components/Profile/Profile';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Messages } from './components/Dialogs/Messages';
import { StorePropsType } from './components/Redux/state';

export const routes = {
  profile: '/profile',
  messages: '/messages/*',
  news: '/news',
  music: '/music',
  settings: '/settings'
}

type AppPropsType = {
  store:StorePropsType
}

const App = ({ store }: AppPropsType) => {
  return (
    <HashRouter>
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path={routes.profile} element={<Profile state={store.getState()} dispatch = {store.dispatch.bind(store)} />} />
            <Route path='/' element={<Navigate to={routes.profile} />} />
            <Route path={routes.messages} element={<Messages state={store.getState()} />} />
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
