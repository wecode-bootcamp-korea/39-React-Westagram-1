import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import './styles/reset.scss';
import './styles/common.scss';
import './pages/shimdongseup/Login/ShimLogin.scss';
import './pages/shimdongseup/Main/ShimMain.scss';
import './components/Nav/Nav.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);
