import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './JungLogin.scss';

function JungLogin() {
  const [id, setId] = useState('');
  const [password, setPw] = useState('');
  const navigate = useNavigate();
  const idPw = id.indexOf('@') !== -1 && password.length > '5';

  const onCheckEnter = e => {
    if (e.key === 'Enter') {
      goToMain;
    }
  };

  const goToMain = e => {
    navigate('/JungMain');
  };

  const idValue = e => {
    setId(e.target.value);
  };

  const pwValue = e => {
    setPw(e.target.value);
  };

  return (
    <>
      <section className="container-wrap">
        <h1>Westagram</h1>
        <form className="input-container">
          <div className="input-wrap">
            {/*로그인 아이디 */}
            <input
              id="id"
              type="text"
              placeholder="전화번호, 사용자이름 또는 이메일"
              onChange={idValue}
            />
            {/*패스워드 */}
            <input
              id="password"
              type="password"
              placeholder="비밀번호"
              onChange={pwValue}
              onKeyUp={onCheckEnter}
            />
          </div>
          <button
            className={idPw ? 'trueid' : 'falseid'}
            disabled={!idPw}
            onClick={goToMain}
            id="btn"
          >
            로그인
          </button>
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
          <img
            id="appstore"
            alt="google-appstore"
            src="/images/junghyowon/google.png"
          />
        </div>
      </section>
    </>
  );
}

export default JungLogin;
