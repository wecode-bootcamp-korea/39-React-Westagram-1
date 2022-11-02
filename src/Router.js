import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// 심동섭의 컴포넌트
import KwakMain from './pages/kwakjongbum/Main/KwakMain';
import KwakLogin from './pages/kwakjongbum/Login/KwakLogin';
import KimMain from './pages/kimdongki/Main/KimMain';
import KimLogin from './pages/kimdongki/Login/KimLogin';
import ShimMain from './pages/shimdongseup/Main/ShimMain';
import ShimLogin from './pages/shimdongseup/Login/ShimLogin';
import JungMain from './pages/junghyowon/Main/JungMain';
import JungLogin from './pages/junghyowon/Login/JungLogin';
import JoMain from './pages/johyeoungjin/Main/JoMain';
import JoLogin from './pages/johyeoungjin/Login/JoLogin';

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
