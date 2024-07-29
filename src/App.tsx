import './App.css';
import { Header } from './components/Header/Header';
import { NavBar } from './components/Navbar/NavBar';
import { Profile } from './components/Profile/Profile';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { MessagesContainer } from './components/Dialogs/MessagesContainer';
import { UsersContainer } from './components/Users/UsersContainer';

export const routes = {
  profile: '/profile',
  messages: '/messages/*',
  news: '/news',
  music: '/music',
  settings: '/settings',
  users:'/users'
}


const App = () => {
  return (
    <HashRouter>
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path={routes.profile} element={<Profile />
            } />
            <Route path='/' element={<Navigate to={routes.profile} />} />
            <Route path={routes.messages} element={<MessagesContainer  />} />
            <Route path={routes.users} element={<UsersContainer   />} />
  
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
