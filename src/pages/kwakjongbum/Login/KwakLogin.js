import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './KwakLogin.scss';

function KwakLogin() {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [btn, setBtn] = useState(true);
  const valCheck = id.includes('@') && pw.length > 4;

  const inputId = e => {
    setId(e.target.value);
  };

  const inputPw = e => {
    setPw(e.target.value);
  };

  const btnActive = () => {
    valCheck ? setBtn(false) : setBtn(true);
  };

  const goToMain = () => {
    if (valCheck) {
      navigate('/KwakMain');
    }
  };

  return (
    <div className="login-wrap">
      <h1>westagram</h1>
      <div className="form-wrap">
        <div className="form-input">
          <input
            type="text"
            name="id"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            className="input-id"
            onChange={inputId}
            onKeyUp={btnActive}
            onKeyPress={e => {
              if (e.key === 'Enter') {
                goToMain();
              }
            }}
          />
        </div>
        <div className="form-input">
          <input
            type="password"
            name="pw"
            placeholder="비밀번호"
            className="input-pw"
            onChange={inputPw}
            onKeyUp={btnActive}
            onKeyPress={e => {
              if (e.key === 'Enter') {
                goToMain();
              }
            }}
          />
        </div>
        <button
          type="button"
          className="btn-login"
          disabled={btn}
          onClick={goToMain}
        >
          <span>로그인</span>
        </button>
      </div>
      <div className="info">
        <a target="blank">비밀번호를 잊으셨나요?</a>
      </div>
    </div>
  );
}

export default KwakLogin;
