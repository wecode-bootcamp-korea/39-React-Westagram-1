import React, { useState } from 'react';
import CommentList from './CommentList';

function KimMain() {
  const [comment, setComment] = useState('');
  const handleCommentInput = event => {
    setComment(event.target.value);
  };
  const [commentArray, setCommentArray] = useState([]);
  const onSubmit = event => {
    event.preventDefault();
    if (comment === '') {
      return;
    }
    setCommentArray([...commentArray, comment]);
    setComment('');
  };
  const pressEnter = event => {
    if (event.code === 'Enter') {
      event.preventDefault();
      if (comment === '') {
        return;
      }
      setCommentArray([...commentArray, comment]);
      setComment('');
    }
  };
  return (
    <body>
      <nav>
        <div className="nav_content">
          <div className="nav_inner">
            <div className="logo">
              <img alt="instagram" src="./images/kimdongki/instagram.png" />
              <span className="textLogo">westagram</span>
            </div>
            <div className="searchBox">
              <img alt="search" src="./images/kimdongki/Magnifying Glass.png" />
              <input type="text" placeholder="검색" />
              <ul className="searchId"></ul>
            </div>
            <div className="nav_icon">
              <img alt="explore" src="./images/kimdongki/explore.png" />
              <img alt="heart" src="./images/kimdongki/heart.png" />
              <div className="profile_icon">
                <img alt="profile" src="./images/kimdongki/profile.png" />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <div id="wrap">
          <div className="feed_top">
            <article className="post">
              <div className="profile-info">
                <div className="user">
                  <div className="profile_image">
                    <img
                      alt="profile-image"
                      src="./images/kimdongki/UandI.jpeg"
                    />
                  </div>
                  <p className="nickname">
                    <b>d___k222</b>
                  </p>
                  <div className="menuIcon">
                    <i className="fas fa-ellipsis-h"></i>
                  </div>
                </div>
              </div>
              <img
                className="feed_album"
                alt="feed_album"
                src="./images/kimdongki/song.JPG"
              />
              <div className="feed_icons">
                <img alt="heart_icon" src="./images/kimdongki/heart.png" />
                <img alt="comment_icon" src="./images/kimdongki/comment.png" />
                <img alt="message_icon" src="./images/kimdongki/message.png" />
                <img
                  className="bookmark_icon"
                  alt="bookmark_icon"
                  src="./images/kimdongki/bookmark.png"
                />
              </div>
              <div className="likes">
                <div className="user">
                  <div className="like_image">
                    <img
                      className="love_image"
                      alt="love_image"
                      src="./images/kimdongki/johnLegend.png"
                    />
                  </div>
                  <span className="like_people">johnLegend</span>
                </div>
                <p>
                  님 <span className="people">외 999,999명</span>이 좋아합니다
                </p>
              </div>
              <div className="feed_text">
                <p className="feedText">
                  <span className="myNickName">d___k222</span> 김동기 '사랑의
                  차이'
                </p>
                <div className="newComment">
                  <span className="userNickName">johnLegend</span>
                  <span className="Comment">
                    what a wonderful voice...🤩 살람해요 킴동키😍
                  </span>
                  <img
                    className="comment_icon"
                    alt="commentHeart_icon"
                    src="./images/kimdongki/heart.png"
                  />
                </div>
              </div>
              <ul>
                {commentArray.map((comment, index) => (
                  <CommentList key={index} comment={comment} />
                ))}
              </ul>
              <p className="time">1분 전</p>
              <div className="comment">
                <input
                  className="userCommet"
                  onChange={handleCommentInput}
                  value={comment}
                  onKeyPress={pressEnter}
                  type="text"
                  id="commentAdd"
                  placeholder="댓글 달기..."
                />
                <button
                  type="button"
                  onClick={onSubmit}
                  className="post_btn"
                  id="submit"
                >
                  게시
                </button>
              </div>
            </article>
          </div>

          <div className="main-right">
            <div className="right-top">
              <img src="./images/kimdongki/UandI.jpeg" alt="myImg" />
              <div className="user">
                <h3 className="myName">d___k222</h3>
              </div>
            </div>

            <div className="right-mid">
              <div className="mid-nav">
                <div>스토리</div>
                <div>모두보기</div>
              </div>
              <ul>
                <li>
                  <img
                    src="./images/kimdongki/johnLegend.png"
                    alt="story_img"
                  />
                  <div>
                    <h3>johnLegend</h3>
                    <h5>15분 전</h5>
                  </div>
                </li>
                <li>
                  <img src="./images/kimdongki/ariana.jpeg" alt="story_img" />
                  <div>
                    <h3>arianagrande</h3>
                    <h5>30분 전</h5>
                  </div>
                </li>
                <li>
                  <img src="./images/kimdongki/lee.jpeg" alt="story_img" />
                  <div>
                    <h3>byunghun0712</h3>
                    <h5>1시간 전</h5>
                  </div>
                </li>
                <li>
                  <img src="./images/kimdongki/baby.JPG" alt="story_img" />
                  <div>
                    <h3>1998_dongki</h3>
                    <h5>24년 전</h5>
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
                  <img src="./images/kimdongki/hanjimin.jpg" alt="story_img" />
                  <div>
                    <h3>roma.emo</h3>
                    <h5>한지민 당신은 꽃인가요..?</h5>
                    <h4>팔로우</h4>
                  </div>
                </li>
                <li>
                  <img src="./images/kimdongki/hyoshin.jpeg" alt="story_img" />
                  <div>
                    <h3>parkhyoshin.official</h3>
                    <h5>박효신 당신은 신인가요..?</h5>
                    <h4>팔로우</h4>
                  </div>
                </li>
                <li>
                  <img src="./images/kimdongki/wash.jpeg" alt="story_img" />
                  <div>
                    <h3>arena.wash</h3>
                    <h5>세차하고싶다...</h5>
                    <h4>팔로우</h4>
                  </div>
                </li>
                <li>
                  <img src="./images/kimdongki/dkfilm.JPG" alt="story_img" />
                  <div>
                    <h3>the.k_film</h3>
                    <h5>사진작품 계정입니다...</h5>
                    <h4>팔로우</h4>
                  </div>
                </li>
              </ul>
            </div>
            <h5 className="right-footer">
              westagram 정보 · 지원 · 홍보 센터 · API · <br />
              채용 정보 · 개인정보처리방침 · 약관 ·<br />
              디렉터리 · 프로필 · 해시태그 · 언어
              <br />
              <br />© 2022 westagram
            </h5>
          </div>
        </div>
      </main>
    </body>
  );
}

export default KimMain;
