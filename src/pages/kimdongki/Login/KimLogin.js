import React from 'react';
import './KimLogin.scss';
function KimLogin() {
  return (
    <main>
      <div className="login_wrapper">
        <div className="login_logo">
          <h1>Westagram</h1>
        </div>
        <div className="login_container">
          <input
            className="login_email"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          ></input>
          <input
            type="password"
            class="login_pw"
            placeholder="비밀번호"
          ></input>

          <button className="login_btn">로그인</button>
        </div>
        <span className="passwordfind_link">
          <a href="">비밀번호를 잊으셨나요?</a>
        </span>
      </div>
    </main>
  );
}

export default KimLogin;
