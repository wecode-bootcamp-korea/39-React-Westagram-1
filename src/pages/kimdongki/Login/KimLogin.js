import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
    if (e.code === 'Enter' && loginValid === true) {
      //로그인 정보 확인
      fetch('로그인 API', {
        method: 'post',
        body: JSON.stringify({
          id: 'id',
          password: 'pw',
        }),
      })
        .then(response => {
          if (response.ok === true) {
            return response.json();
          }
          throw new Error('에러 발생!');
        })
        .catch(error => console.log(error))
        .then(data => {
          if (data.message === 'login success') {
            localStorage.setItem('TOKEN', data.token);
            alert('로그인 성공');
            goToMain();
          } else {
            alert('로그인 실패');
          }
        });
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
            onKeyPress={pressEnter}
            type="password"
            className="login_pw"
            placeholder="비밀번호"
          />

          <button
            className="login_btn"
            onClick={goToMain}
            disabled={!loginValid ? true : false}
          >
            로그인
          </button>
        </div>
        <Link className="passwordfind_link" to="#">
          비밀번호를 잊으셨나요?
        </Link>
      </div>
    </main>
  );
}

export default KimLogin;
