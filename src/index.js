import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'; // Only works after installing bootstrap
import 'animate.css';
import {BrowserRouter} from 'react-router-dom'

<<<<<<< HEAD

=======
>>>>>>> b953fe75f312377e6aa4ca7ca3a05e2fea6659a2
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <BrowserRouter>
    <App />
    </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
