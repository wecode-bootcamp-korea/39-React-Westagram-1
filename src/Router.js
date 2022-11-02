import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// 심동섭의 컴포넌트
import KwakMain from './pages/kwakjongbum/Main/Main';
import KwakLogin from './pages/kwakjongbum/Login/Login';
import KimMain from './pages/kimdongki/Main/Main';
import KimLogin from './pages/kimdongki/Login/Login';
import ShimMain from './pages/shimdongseup/Main/Main';
import ShimLogin from './pages/shimdongseup/Login/Login';
import JungMain from './pages/junghyowon/Main/Main';
import JungLogin from './pages/junghyowon/Login/Login';
import JoMain from './pages/johyeoungjin/Main/Main';
import JoLogin from './pages/johyeoungjin/Login/Login';

// import 한 컴포넌트에 대한 경로를 각각 설정해줍니다.
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/KwakMain" element={<KwakMain />} />
        <Route path="/KwakLogin" element={<KwakLogin />} />
        <Route path="/KimMain" element={<KimMain />} />
        <Route path="/KimLogin" element={<KimLogin />} />
        <Route path="/ShimMain" element={<ShimMain />} />
        <Route path="/ShimLogin" element={<ShimLogin />} />
        <Route path="/JungMain" element={<JungMain />} />
        <Route path="/JungLogin" element={<JungLogin />} />
        <Route path="/JoMain" element={<JoMain />} />
        <Route path="/JoLogin" element={<JoLogin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
