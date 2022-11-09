import React from 'react';
import { useState } from 'react';
import './JungMain.scss';

function JungMain() {
  const [comment, setComment] = useState('');
  const [commentArea, setCommentArea] = useState([
    {
      id: 'hyowon',
      comment: '1번 댓글',
    },
  ]);

  const handleInput = e => {
    setComment(e.target.value);
  };

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
                <li></li>
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
              src="/images/junghyowon/sakuraprofile.png"
            />
            <span>39saku_chan</span>
            <div className="feed-image-top-more">
              <img alt="feed-viewmore" src="/images/junghyowon/viewmore.png" />
            </div>
          </div>
          <div className="feed-image">
            <img alt="feed-image" src="/images/junghyowon/sakura.png" />
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
              <p>좋아요 888,392개</p>
              <span>39saku_chan</span>
              <span>봄인가 여름인가...💐🌳</span>
              <ul>
                <li>vzceah 非常に美しい 😍</li>
                <li>lliirew ほんとに可愛い😭😭😭憧れ。大好きさくちゃん</li>
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
              <p className="followfriend-name">seumseu</p>
              <span>회원님을 팔로우합니다</span>
            </div>
            <div className="follow">
              <span>팔로우</span>
            </div>
          </div>
          <div className="recommand-friend">
            <img alt="friend1" src="/images/junghyowon/99uri.png" />
            <div className="friend-name">
              <p className="followfriend-name">a999o999s</p>
              <span>회원님을 위한 추천</span>
            </div>
            <div className="follow">
              <span>팔로우</span>
            </div>
          </div>
          <div className="recommand-friend">
            <img alt="friend1" src="/images/junghyowon/sowhat.jpg" />
            <div className="friend-name">
              <p className="followfriend-name">dindu___u</p>
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
