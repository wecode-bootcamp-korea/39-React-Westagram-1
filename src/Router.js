import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// 심동섭의 컴포넌트
import ShimMain from "./pages/shimdongseup/Main/Main";
import ShimLogin from "./pages/shimdongseup/Login/Login";

// import 한 컴포넌트에 대한 경로를 각각 설정해줍니다.
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ShimMain" element={<ShimMain />} />
        <Route path="/ShimLogin" element={<ShimLogin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
