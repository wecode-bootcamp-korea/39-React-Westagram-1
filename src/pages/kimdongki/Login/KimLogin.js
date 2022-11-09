import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './KimLogin.scss';

function KimLogin() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/KimMain');
  };

  const [id, idValue] = useState('');
  const [pw, pwValue] = useState('');

  const saveUserId = e => {
    idValue(e.target.value);
  };

  const saveUserPw = e => {
    pwValue(e.target.value);
  };

  const loginValid = id && id.includes('@') && pw && pw.length >= 5;

  const pressEnter = e => {
    if (e.code === 'Enter') {
      goToMain();
    }
  };

  return (
    <main>
      <div className="login_wrapper">
        <div className="login_logo">
          <h1>Westagram</h1>
        </div>
        <div className="login_container">
          <input
            onChange={saveUserId}
            type="text"
            className="login_email"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            onChange={saveUserPw}
            onKeyDown={pressEnter}
            type="password"
            className="login_pw"
            placeholder="비밀번호"
          />

          <button
            className="login_btn"
            // type="button"
            onClick={goToMain}
            disabled={!loginValid ? true : false}
          >
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
