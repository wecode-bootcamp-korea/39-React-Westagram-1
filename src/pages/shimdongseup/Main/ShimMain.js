import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchUser from './SearchUser.js';
import Feeds from './Feeds.js';

function ShimMain() {
  let navigate = useNavigate();
  let gotoLogin = () => {
    navigate('/ShimLogin');
  };

  //유저 검색 기능
  const [searchInput, setSearchInput] = useState('');

  function inputSearch(e) {
    setSearchInput(e.target.value);
  }

  //메뉴박스 생성
  const [menuBoxDisplay, setMenuBoxDisplay] = useState('none');

  function menuBoxOpen() {
    if (menuBoxDisplay === 'none') {
      setMenuBoxDisplay('block');
    } else {
      setMenuBoxDisplay('none');
    }
  }

  return (
    <>
      <header>
        <nav>
          <Link to="/ShimMain">
            <img
              className="logo"
              src="./images/shimdongseup/instagram.png"
              alt="instagram"
            />
          </Link>
          <Link className="textLogo" to="/ShimMain">
            Westagram
          </Link>
          <div className="material-icons search topSearch">search</div>
          <input
            onChange={inputSearch}
            className="topSearch"
            type="text"
            placeholder="검색"
          />
          {searchInput.length > 0 && (
            <div className="searchUser">
              <SearchUser searchInput={searchInput} />
            </div>
          )}
          <div className="material-symbols-outlined explore">explore</div>
          <div className="material-symbols-outlined favorite">favorite</div>
          <div
            onClick={menuBoxOpen}
            className="material-symbols-outlined person"
          >
            person
          </div>
          <div className="menuBox" style={{ display: menuBoxDisplay }}>
            <div className="menu">
              <div className="material-symbols-outlined profile-icon">
                account_circle
              </div>
              <div>프로필</div>
            </div>
            <div className="menu">
              <div className="material-symbols-outlined bookmark">bookmark</div>
              <div>저장됨</div>
            </div>
            <div className="menu">
              <div className="material-symbols-outlined setting">settings</div>
              <div>설정</div>
            </div>
            <div onClick={gotoLogin} className="logout">
              로그아웃
            </div>
          </div>
        </nav>
      </header>

      <section className="main">
        <div className="feeds">
          <Feeds />
        </div>

        <div className="main-right">
          <div className="right-top">
            <div className="storyColor">
              <img src="./images/shimdongseup/profile_img_1.jpeg" alt="myImg" />
            </div>
            <div className="user">
              <h3 className="myName">dong_s_37</h3>
              <h3 className="myInfo">심동섭</h3>
            </div>
          </div>

          <div className="right-mid">
            <div className="mid-nav">
              <div>스토리</div>
              <div>모두보기</div>
            </div>
            <ul>
              <li>
                <div className="storyColor">
                  <img
                    src="./images/shimdongseup/profile_img_1.jpeg"
                    alt="story_img"
                  />
                </div>
                <div>
                  <h3>dong_s_37</h3>
                  <h5>15분 전</h5>
                </div>
              </li>
              <li>
                <div className="storyColor">
                  <img
                    src="./images/shimdongseup/milk_img.jpeg"
                    alt="story_img"
                  />
                </div>
                <div>
                  <h3>milk</h3>
                  <h5>30분 전</h5>
                </div>
              </li>
              <li>
                <div className="storyColor">
                  <img
                    src="./images/shimdongseup/wecode_img.jpeg"
                    alt="story_img"
                  />
                </div>
                <div>
                  <h3>wecode</h3>
                  <h5>1시간 전</h5>
                </div>
              </li>
              <li>
                <div className="storyColor">
                  <img
                    src="./images/shimdongseup/wework_img.jpeg"
                    alt="story_img"
                  />
                </div>
                <div>
                  <h3>wework</h3>
                  <h5>2시간 전</h5>
                </div>
              </li>
            </ul>
          </div>

          <div className="right-bottom">
            <div className="bottom-nav">
              <div>회원님을 위한 추천</div>
              <div>모두보기</div>
            </div>
            <ul>
              <li>
                <img src="./images/shimdongseup/kfc_img.jpeg" alt="story_img" />
                <div>
                  <h3>kfc</h3>
                  <h5>wecode님 외 2명이 함께 알고있습니다.</h5>
                  <h4>팔로우</h4>
                </div>
              </li>
              <li>
                <img
                  src="./images/shimdongseup/mcdonald_img.jpeg"
                  alt="story_img"
                />
                <div>
                  <h3>mcdonald</h3>
                  <h5>milk님 외 1명이 함께 알고있습니다.</h5>
                  <h4>팔로우</h4>
                </div>
              </li>
              <li>
                <img
                  src="./images/shimdongseup/starbucks_img.jpeg"
                  alt="story_img"
                />
                <div>
                  <h3>starbucks</h3>
                  <h5>wecode님 외 3명이 함께 알고있습니다.</h5>
                  <h4>팔로우</h4>
                </div>
              </li>
              <li>
                <img
                  src="./images/shimdongseup/wework_img.jpeg"
                  alt="story_img"
                />
                <div>
                  <h3>wework</h3>
                  <h5>wecode님 외 10명이 함께 알고있습니다.</h5>
                  <h4>팔로우</h4>
                </div>
              </li>
            </ul>
          </div>
          <ul className="right-footer">
            {FOOTER_INFO_LIST.map(infoList => {
              return (
                <li key={infoList.id}>
                  <a href={infoList.link}>{infoList.text}</a>
                  <span>{infoList.next}</span>
                </li>
              );
            })}
            <h5>
              <br />
              <br />
              © 2022 INSTAGRAM FROM META
              <br />
              <br />
            </h5>
            <Link className="logout" to="/ShimLogin">
              ·Logout·
            </Link>
          </ul>
        </div>
      </section>
    </>
  );
}

export default ShimMain;

const FOOTER_INFO_LIST = [
  { id: 1, link: 'https://about.instagram.com/', text: '소개', next: '·' },
  { id: 2, link: 'https://help.instagram.com/', text: '도움말', next: '·' },
  {
    id: 3,
    link: 'https://about.instagram.com/blog',
    text: '홍보 센터',
    next: '·',
  },
  {
    id: 4,
    link: 'https://developers.facebook.com/docs/instagram',
    text: 'API',
  },
  {
    id: 5,
    link: 'https://about.instagram.com/about-us/careers',
    text: '채용 정보',
    next: '·',
  },
  {
    id: 6,
    link: 'https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect',
    text: '개인정보처리방침',
    next: '·',
  },
  {
    id: 7,
    link: 'https://help.instagram.com/581066165581870/',
    text: '약관',
    next: '·',
  },
  {
    id: 8,
    link: 'https://www.instagram.com/explore/locations/',
    text: '위치',
    next: '·',
  },
  {
    id: 9,
    link: '#',
    text: '위치',
    next: '',
  },
];
