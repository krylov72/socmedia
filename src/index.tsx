import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {state} from './components/Redux/state'
import {addPost,changeNewPostText} from './components/Redux/state'

const root = ReactDOM.createRoot( 
  document.getElementById('root') as HTMLElement
);

export const rerenderTree = () => {
  root.render(
  
    <App state = {state} addPost = {addPost} rerenderTree= {rerenderTree} changeNewPostText={changeNewPostText}/>

);
}
rerenderTree()


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
