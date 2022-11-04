import React from 'react';

function JungMain() {
  return (
    <>
      {/*헤더*/}
      <nav className="nav-icon">
        <img id="logo" alt="logo" src="/images/logo.png" />
        <img alt="home" src="/images/home.png" />
        <img alt="search" src="/images/search.png" />
        <img alt="camposs" src="/images/camposs.png" />
        <img alt="dm" src="/images/dm.png" />
        <img alt="heart" src="/images/heart.png" />
        <img id="myprofile" alt="my profile" src="/images/friend1.jpeg" />
        <img id="moreview" alt="moreview" src="/images/moreview.png" />
      </nav>
      <div class="mainfeed-container">
        <artile>
          <div className="mainfeed-top">
            <div class="feed-profile">
              <div class="feed-profile1">
                <img alt="feed1" src="/images/mycat.jpeg" />
                <span>yeori_luv_0</span>
              </div>
              <div class="feed-profile1">
                <img alt="feed1" src="/images/profile1.jpeg" />
                <span>zz2_tt</span>
              </div>
              <div class="feed-profile1">
                <img alt="feed1" src="/images/friend2.jpeg" />
                <span>aimyon36</span>
              </div>
              <div class="feed-profile1">
                <img alt="feed1" src="/images/nuri5.jpeg" />
                <span>luv_nan2</span>
              </div>
            </div>
          </div>
          <div className="feed-image-top">
            <div className="user-profile"></div>
            <img alt="user-profile-image" src="/images/mymelody.jpeg" />
            <span>timtimxxz</span>
            <div className="feed-image-top-more">
              <img src="/images/viewmore.png" />
            </div>
          </div>
          <div className="feed-image">
            <img alt="feed-image" src="/images/nuri2.jpeg" />
          </div>
          <div className="mainfeed-comment-top">
            <img src="/images/heart.png" />
            <img src="/images/message.png" />
            <img src="/images/dm.png" />
            <div className="bookmark">
              <img alt="bookmark" src="/images/bookmark.png" />
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
              <img alt="emogi" src="/images/emogi.png" />
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
            <img alt="user-profile-image" src="/images/friend2.jpeg" />
            <span>y_wldud</span>
            <div className="feed-image-top-more">
              <img src="/images/viewmore.png" />
            </div>
          </div>
          <div className="feed-image">
            <img alt="feed-image" src="/images/profile_sea.png" />
          </div>
          <div className="mainfeed-comment-top">
            <img src="/images/heart.png" />
            <img src="/images/message.png" />
            <img src="/images/dm.png" />
            <div className="bookmark">
              <img alt="bookmark" src="/images/bookmark.png" />
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
              <img alt="emogi" src="/images/emogi.png" />
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
        </artile>
        <div className="main-feed-right">
          <div className="myprofile-right">
            <img
              className="imageround"
              alt="myprofile"
              src="/images/friend1.jpeg"
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
            <img alt="friend1" src="/images/profile.jpeg" />
            <div className="friend-name">
              <p>seumseu</p>
              <span>회원님을 팔로우합니다</span>
            </div>
            <div className="follow">
              <span>팔로우</span>
            </div>
          </div>
          <div className="recommand-friend">
            <img alt="friend1" src="/images/99uri.png" />
            <div className="friend-name">
              <p>a999o999s</p>
              <span>회원님을 위한 추천</span>
            </div>
            <div className="follow">
              <span>팔로우</span>
            </div>
          </div>
          <div className="recommand-friend">
            <img alt="friend1" src="/images/sowhat.jpg" />
            <div className="friend-name">
              <p>dindu___u</p>
              <span>회원님을 위한 추천</span>
            </div>
            <div className="follow">
              <span>팔로우</span>
            </div>
          </div>
          <div className="recommand-friend">
            <img alt="friend1" src="/images/profile1.jpeg" />
            <div className="friend-name">
              <p>seumseu</p>
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
