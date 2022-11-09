import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import './styles/reset.scss';
import './styles/common.scss';
import './pages/kimdongki/Login/KimLogin.scss';
import './pages/kimdongki/Main/KimMain.scss';
import './components/Nav/Nav.scss';
import 'https://kit.fontawesome.com/51d8702035.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);
