import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// 심동섭의 컴포넌트
import LoginCode from "./pages/shimdongseup/Login/Login";
import MainCode from "./pages/shimdongseup/Main/Main";

// // 김개발의 컴포넌트
// import LoginGaebal from './pages/gaebalKim/Login/Login';
// import MainGaebal from './pages/gaebalKim/Main/Main';

// import 한 컴포넌트에 대한 경로를 각각 설정해줍니다.
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<LoginCode />} />
        <Route path="/" element={<MainCode />} />
        {/* <Route path="/login-gaebal" element={<LoginGaebal />} />
        <Route path="/main-gaebal" element={<MainGaebal />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
