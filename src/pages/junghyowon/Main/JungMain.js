import React from 'react';
import './JungMain.scss';

function JungMain() {
  return (
    <>
      {/*헤더*/}
      <nav className="nav-icon">
        <img className="logo" alt="logo" src="/images/junghyowon/logo.png" />
        <img alt="home" src="/images/junghyowon/home.png" />
        <img alt="search" src="/images/junghyowon/search.png" />
        <img alt="camposs" src="/images/junghyowon/camposs.png" />
        <img alt="dm" src="/images/junghyowon/dm.png" />
        <img alt="heart" src="/images/junghyowon/heart.png" />
        <img
          className="myprofile"
          alt="my profile"
          src="/images/junghyowon/friend1.jpg"
        />
        <div className="moreview-img">
          <img
            className="moreview"
            alt="moreview"
            src="/images/junghyowon/moreview.png"
          />
        </div>
      </nav>
      <div className="mainfeed-container">
        <article>
          <div className="mainfeed-top">
            <div className="feed-profile">
              <div className="feed-profile1">
                <img
                  className="feedprofile-img"
                  alt="feed1"
                  src="/images/junghyowon/mycat.jpg"
                />
                <span>yeori_luv_0</span>
              </div>
              <div className="feed-profile1">
                <img
                  className="feedprofile-img"
                  alt="feed2"
                  src="/images/junghyowon/profile1.jpeg"
                />
                <span>zz2_tt</span>
              </div>
              <div className="feed-profile1">
                <img
                  className="feedprofile-img"
                  alt="feed3"
                  src="/images/junghyowon/friend2.jpeg"
                />
                <span>aimyon36</span>
              </div>
              <div className="feed-profile1">
                <img
                  className="feedprofile-img"
                  alt="feed4"
                  src="/images/junghyowon/nuri5.jpg"
                />
                <span>luv_nan2</span>
              </div>
            </div>
          </div>
          <div className="feed-image-top">
            <img
              alt="user-profile-image"
              src="/images/junghyowon/mymelody.jpeg"
            />
            <span>timtimxxz</span>
            <div className="feed-image-top-more">
              <img alt="feed-user" src="/images/junghyowon/viewmore.png" />
            </div>
          </div>
          <div className="feed-image">
            <img alt="feed-image" src="/images/junghyowon/nuri2.jpg" />
          </div>
          <div className="mainfeed-comment-top">
            <img alt="mainfeed-icon" src="/images/junghyowon/heart.png" />
            <img alt="mainfeed-icon" src="/images/junghyowon/message.png" />
            <img alt="mainfeed-icon" src="/images/junghyowon/dm.png" />
            <div className="bookmark">
              <img
                className="bookmarkimg"
                alt="bookmark"
                src="/images/junghyowon/bookmark.png"
              />
            </div>
          </div>
          <div className="feed-comment-main">
            <div className="comment-my">
              <p>좋아요 30개</p>
              <span>timtimxxz</span>
              <span>🐶 휴지로 파티하는 누리</span>
              <ul>
                <li>crowtit_tattoo 누리 완전 신났네</li>
                <li>cheatival_ 나도 누리랑 놀아줄래 ㅎ</li>
                <li>
                  mong8yy 오늘도 복실복실 하구나 미용은 언제하러 가니 누리야
                </li>
              </ul>
            </div>
            <div className="comment-write">
              <img alt="emogi" src="/images/junghyowon/emogi.png" />
              <input
                className="comment-input"
                type="text"
                placeholder="댓글 달기..."
              />
              <button className="comment-push" type="button">
                게시
              </button>
            </div>
          </div>
          <div className="feed-image-top">
            <div className="user-profile"></div>
            <img
              alt="user-profile-image"
              src="/images/junghyowon/friend2.jpeg"
            />
            <span>y_wldud</span>
            <div className="feed-image-top-more">
              <img alt="feed-viewmore" src="/images/junghyowon/viewmore.png" />
            </div>
          </div>
          <div className="feed-image">
            <img alt="feed-image" src="/images/junghyowon/profile_sea.png" />
          </div>
          <div className="mainfeed-comment-top">
            <img alt="comment-icon" src="/images/junghyowon/heart.png" />
            <img alt="comment-icon" src="/images/junghyowon/message.png" />
            <img alt="comment-icon" src="/images/junghyowon/dm.png" />
            <div className="bookmark">
              <img alt="bookmark" src="/images/junghyowon/bookmark.png" />
            </div>
          </div>
          <div className="feed-comment-main">
            <div className="comment-my">
              <p>좋아요 15개</p>
              <span>y_wldud</span>
              <span>한가로운 사이판 바다🌴</span>
              <ul>
                <li>sumida_table 헐 ~ 나도 해외여행 가고싶당 ㅠㅠ</li>
                <li>
                  reimepurr 와 바다 진짜 깨끗하고 이쁘다 완전 에메랄드 색이네
                </li>
              </ul>
            </div>
            <div className="comment-write">
              <img alt="emogi" src="/images/junghyowon/emogi.png" />
              <input
                className="comment-input"
                type="text"
                placeholder="댓글 달기..."
              />
              <button className="comment-push" type="button">
                게시
              </button>
            </div>
          </div>
        </article>
        <div className="main-feed-right">
          <div className="myprofile-right">
            <img
              className="imageround"
              alt="myprofile"
              src="/images/junghyowon/friend1.jpg"
            />
            <div className="myprofile-name">
              <p>renebaebae</p>
              <p className="myname">배주현</p>
            </div>
            <div className="myprofile-modify">
              <span>전환</span>
            </div>
          </div>
          <div className="recommand">
            <span className="my-recommand">회원님을 위한 추천</span>
            <span>모두 보기</span>
          </div>
          <div className="recommand-friend">
            <img alt="friend1" src="/images/junghyowon/profile.jpeg" />
            <div className="friend-name">
              <p claaName="followfriend-name">seumseu</p>
              <span>회원님을 팔로우합니다</span>
            </div>
            <div className="follow">
              <span>팔로우</span>
            </div>
          </div>
          <div className="recommand-friend">
            <img alt="friend1" src="/images/junghyowon/99uri.png" />
            <div className="friend-name">
              <p claaName="followfriend-name">a999o999s</p>
              <span>회원님을 위한 추천</span>
            </div>
            <div className="follow">
              <span>팔로우</span>
            </div>
          </div>
          <div className="recommand-friend">
            <img alt="friend1" src="/images/junghyowon/sowhat.jpg" />
            <div className="friend-name">
              <p claaName="followfriend-name">dindu___u</p>
              <span>회원님을 위한 추천</span>
            </div>
            <div className="follow">
              <span>팔로우</span>
            </div>
          </div>
          <div className="recommand-friend">
            <img alt="friend1" src="/images/junghyowon/profile1.jpeg" />
            <div className="friend-name">
              <p>hyommm_</p>
              <span>jhdaijh님과 jhartjh님이 팔로우합니다</span>
            </div>
            <div className="follow">
              <span>팔로우</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JungMain;
