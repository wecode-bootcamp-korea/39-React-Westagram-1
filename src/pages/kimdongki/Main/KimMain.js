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
                <img
                  className="heart_icon"
                  alt="heart_icon"
                  src="./images/kimdongki/heart.png"
                />
                <img
                  className="comment_icon"
                  alt="comment_icon"
                  src="./images/kimdongki/comment.png"
                />
                <img
                  className="message_icon"
                  alt="message_icon"
                  src="./images/kimdongki/message.png"
                />
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
              <div className="user_comment">
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
            <ul className="right-footer">
              {FOOTER_INFO_LIST.map(infoList => {
                return (
                  <li key={infoList.id}>
                    <a href={infoList.link}>{infoList.text}</a>
                    <span>{infoList.next}</span>
                  </li>
                );
              })}
              <h1>
                <br />
                © 2022 westagram
                <br />
              </h1>
            </ul>
          </div>
        </div>
      </main>
    </body>
  );
}

export default KimMain;

const FOOTER_INFO_LIST = [
  { id: 1, link: 'https://about.meta.com/', text: 'Meta' },
  { id: 2, link: 'https://about.instagram.com/', text: '소개' },
  { id: 3, link: 'https://about.instagram.com/blog', text: '블로그' },
  {
    id: 4,
    link: 'https://about.instagram.com/about-us/careers',
    text: '채용 정보',
  },
  { id: 5, link: 'https://help.instagram.com/', text: '도움말' },
  {
    id: 6,
    link: 'https://developers.facebook.com/docs/instagram',
    text: 'API',
  },
  {
    id: 7,
    link: 'https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect',
    text: '개인정보처리방침',
  },
  { id: 8, link: 'https://help.instagram.com/581066165581870/', text: '약관' },
  {
    id: 9,
    link: 'https://www.instagram.com/directory/profiles/',
    text: '인기 계정',
  },
  {
    id: 10,
    link: 'https://www.instagram.com/directory/hashtags/',
    text: '해시태그',
  },
  {
    id: 11,
    link: 'https://www.instagram.com/explore/locations/',
    text: '위치',
  },
];
