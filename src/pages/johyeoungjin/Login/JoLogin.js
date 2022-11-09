import React, { useState } from 'react';
import './JoLogin.scss';

function JoLogin() {
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');

  const saveUserId = event => {
    console.log(idValue);
    setIdValue(event.target.value);
  };
  const saveUserPw = event => {
    console.log(pwValue);
    setPwValue(event.target.value);
  };

  const isValid = pwValue.length > 5 && idValue.includes('@');

  return (
    <div className="login-container">
      <div className="container">
        <div className="loginBox">
          <h1 className="title">westagram</h1>

          <input
            className="idForm"
            type="text"
            name="id"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={saveUserId}
            value={idValue}
          />
          <input
            className="pwForm"
            name="pw"
            type="password"
            placeholder="비밀번호"
            onChange={saveUserPw}
            value={pwValue}
          />

          <button className="loginButton" disabled={!isValid}>
            로그인
          </button>
          <a href="#">
            <p>비밀번호를 잊으셨나요?</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default JoLogin;
