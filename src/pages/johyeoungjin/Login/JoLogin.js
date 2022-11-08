import React, { useState } from 'react';
import './JoLogin.scss';

function JoLogin() {
  const [isIdValue, setIdValue] = useState();
  const saveUserId = event => {
    setIdValue(event.target.value);
  };
  return (
    <div className="login-container">
      <div className="container">
        <div className="loginBox">
          <h1 className="title">westagram</h1>

          <input
            className="idForm"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={saveUserId}
          />
          <input
            className="pwForm"
            type="password"
            placeholder="비밀번호"
            onChange={saveUserId}
          />

          <button className="loginButton">로그인</button>
          <a href="#">
            <p>비밀번호를 잊으셨나요?</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default JoLogin;
