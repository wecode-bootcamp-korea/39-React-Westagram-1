import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import './styles/reset.scss';
import './styles/common.scss';
import './pages/johyeoungjin/Login/JoLogin';
import 'https://kit.fontawesome.com/f970fb449d.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);
