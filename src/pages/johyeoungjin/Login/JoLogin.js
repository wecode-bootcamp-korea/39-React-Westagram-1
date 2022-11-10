import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './JoLogin.scss';

function JoLogin() {
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');
  const navigate = useNavigate();

  const saveUserId = event => {
    console.log(idValue);
    setIdValue(event.target.value);
  };
  const saveUserPw = event => {
    console.log(pwValue);
    setPwValue(event.target.value);
  };

  const isValid = pwValue.length > 5 && idValue.includes('@');

  const onClickLogin = e => {
    fetch('http://10.58.52.176:3000/Login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ name: idValue, password: pwValue }),
    })
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('token', data.accessToken);
        navigate('/JoMain');
      });
  };

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

          <button
            className="loginButton"
            disabled={!isValid}
            onClick={onClickLogin}
            type="submit"
          >
            로그인
          </button>
          <Link to="#">
            <p>비밀번호를 잊으셨나요?</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default JoLogin;
