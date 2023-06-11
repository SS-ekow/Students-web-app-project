import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; 
import Dashboard from './pages/Dashboard';
import StudentInfo from './pages/StudentInfo';
import Registration from './pages/Registration';


import {
  createBrowserRouter, RouterProvider,
} from 'react-router-dom';


import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
  },

  {
    path: '/Dashboard',
    element: <Dashboard/>, 
  },

  {
    path: '/Studentinfo',
    element: <StudentInfo/>, 
  },

  {
    path: '/Registration',
    element: <Registration/>, 
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    
  </React.StrictMode>);







// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
