import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function ShimLogin() {
  let navigate = useNavigate();
  let gotomain = () => {
    navigate('/ShimMain');
  };

  const [account, setAccount] = useState({
    id: '',
    password: '',
  });
  const [vaild, setVaild] = useState(true);

  const onChangeAccount = e => {
    //input에 입력될 때마다 account state값 변경되게 하는 함수
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
    //유효성 검사 : account는 마지막에 처리되기 때문에 입력하는게 id이면 pw는 account를 쓰고 id는 target.value를 이용한다.
    if (e.target.name === 'id') {
      if (e.target.value.indexOf('@') === -1 || account.password.length < 5) {
        setVaild(true);
      } else {
        setVaild(false);
      }
    } else {
      if (account.id.indexOf('@') === -1 || e.target.value.length < 5) {
        setVaild(true);
      } else {
        setVaild(false);
        //활성화 후 엔테치면 메인화면 이동
        if (e.keyCode === 13) {
          gotomain();
        }
      }
    }
  };

  return (
    <>
      <div className="login">
        <div className="loginBox">
          <div className="logoLink">
            <div onClick={gotomain} className="logo">
              Westagram
            </div>
          </div>
          <div className="loginInput">
            <input
              className="idInput"
              name="id"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onKeyUp={onChangeAccount}
            />
            <input
              className="pwInput"
              name="password"
              type="password"
              placeholder="비밀번호"
              onKeyUp={onChangeAccount}
            />
          </div>
          <div className="loginBtnBox">
            <button onClick={gotomain} className="loginBtn" disabled={vaild}>
              로그인
            </button>
          </div>
          <Link className="pwForget" to="#">
            비밀번호를 잊으셨나요?
          </Link>
        </div>
      </div>
    </>
  );
}

export default ShimLogin;
