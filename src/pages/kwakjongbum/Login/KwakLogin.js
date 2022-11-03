import React from 'react';
import { Link } from 'react-router-dom';
import './KwakLogin.scss';

function KwakLogin() {
  return (
    <div className="login-wrap">
      <h1>westagram</h1>
      <div className="form-wrap">
        <div className="form-input">
          <input
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            className="input-id"
          />
        </div>
        <div className="form-input">
          <input type="password" placeholder="비밀번호" className="input-pw" />
        </div>
        <Link to="/main">
          <button type="button" className="btn-login" disabled="disabled">
            <span>로그인</span>
          </button>
        </Link>
      </div>
      <div className="info">
        <a target="_blank">비밀번호를 잊으셨나요?</a>
      </div>
    </div>
  );
}

export default KwakLogin;
