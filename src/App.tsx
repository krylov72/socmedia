import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src="https://logo-base.com/logo/playstation_logo_logotype.png" alt="" />
      </header>
      <nav className='nav'>
        <ul>
          <li><a href="">Profile</a></li>
          <li><a href="">Messages</a></li>
          <li><a href="">News</a></li>
          <li><a href="">Music</a></li>
          <li><a href="">Settings</a></li>
        </ul>
      </nav>
      <div className='content'>Hello
        <img src="https://siabit.ru/wp-content/uploads/2023/10/5.jpg" alt="" />
        <div>
          <img src="https://avatars.mds.yandex.net/i?id=43ceb99d45f9d9a4d78cd04d9329f9c18c2f687dde0f975c-4860157-images-thumbs&n=13" alt="" />
          
        </div>
        <div>
          My posts
          <div>New post</div>
        </div>
        <div>
          post 1
        </div>
        <div>
          post 2
        </div>
      </div>
    </div>
  );
}


export default App;
