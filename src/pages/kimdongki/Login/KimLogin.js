import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './KimLogin.scss';

function KimLogin() {
  const navi = useNavigate();
  const moveMain = () => {
    navi('./KimMain');
  };
  return (
    <main>
      <div className="login_wrapper">
        <div className="login_logo">
          <h1>Westagram</h1>
        </div>
        <div className="login_container">
          <input
            type="text"
            className="login_email"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          ></input>
          <input
            type="password"
            class="login_pw"
            placeholder="비밀번호"
          ></input>

          <button onClick={moveMain} className="login_btn">
            로그인
          </button>
        </div>
        <span className="passwordfind_link">
          <a href="">비밀번호를 잊으셨나요?</a>
        </span>
      </div>
    </main>
  );
}

export default KimLogin;
