import React from 'react';

function JungLogin() {
  return (
    <>
      <section className="container-wrap">
        <h1 className="login-title">Westagram</h1>
        <form className="input-container">
          <div className="input-wrap">
            <input
              id="id"
              type="text"
              placeholder="전화번호, 사용자이름 또는 이메일"
            />
            <input id="password" type="password" placeholder="비밀번호" />
          </div>
          <button id="btn">로그인</button>
        </form>
        <div className="last">
          <p>
            <a href="#">비밀번호를 잊으셨나요?</a>
          </p>
        </div>
      </section>
      <section className="joincontainer-wrap">
        <div className="footer">
          <div className="join">
            <span className="join-notice">계정이 없으신가요?</span>
            <a href="#">가입하기</a>
          </div>
        </div>
        <div className="app-down">
          <div className="download-notice">앱을 다운로드하세요.</div>
          <img
            id="appstore"
            alt="apple-appstore"
            src="/images/junghyowon/apple.png"
          />
          <img id="appstore" alt="google-appstore" src="/images/google.png" />
        </div>
      </section>
    </>
  );
}

export default JungLogin;
