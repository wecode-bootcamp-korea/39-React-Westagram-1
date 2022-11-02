import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Comment from "./Comment";

function Main() {
  //인풋받은 댓글을 배열로 저장
  const [comment, setComment] = useState("첫 번째 댓글");
  const [commentArray, setCommentArray] = useState([
    { userId: `wecode`, comment: comment },
  ]);

  function handleCommentInput(e) {
    setComment(e.target.value);
  }
  function handleTotalEnter(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      const repoArray = [...commentArray];
      if (e.target.value !== "") {
        repoArray.push({ userId: "wecode", comment: comment });
        setCommentArray(repoArray);
      }
      e.target.value = "";
    }
  }

  return (
    <>
      <header>
        <nav>
          <Link to="/">
            <img
              className="logo"
              src="../../../images/instagram.png"
              alt="instagram"
            />
          </Link>
          <Link className="textLogo" to="/">
            Westagram
          </Link>
          <div className="material-icons search topSearch">search</div>
          <input className="topSearch" type="text" placeholder="검색" />
          <div className="searchUser">
            {/* <!-- javascript로 추가예정 --> */}
          </div>
          <div className="material-symbols-outlined explore">explore</div>
          <div className="material-symbols-outlined favorite">favorite</div>
          <div className="material-symbols-outlined person">person</div>
          <div className="menuBox">
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
            <div className="logout">로그아웃</div>
          </div>
        </nav>
      </header>

      <section className="main">
        <div className="feeds">
          <div className="article">
            <div className="feed-top">
              <div className="storyColor">
                <img
                  className="profile-img"
                  src="../../../images/profile_img_1.jpeg"
                  alt="profile-img"
                />
              </div>
              <div className="user">
                <h3 className="user-name">dong_s_37</h3>
                <h4 className="user-info">고성</h4>
              </div>
              <div className="material-symbols-outlined add-info-icon">
                more_horiz
              </div>
            </div>

            <img
              className="feed-img"
              src="../../../images/feed_img_1.JPG"
              alt="feed-img"
            />
            <div className="feed-icons">
              <div className="material-symbols-outlined heart">favorite</div>
              <img
                className="chat-icon"
                src="../../../images/chat.png"
                alt="chat-icon"
              />
              <div className="material-symbols-outlined upload">
                file_upload
              </div>
              <div className="material-symbols-outlined bookmark">bookmark</div>
            </div>

            <div className="like">
              <img src="../../../images/profile_img_1.jpeg" alt="like-img" />

              <h3>dong_s_37</h3>
              <h4>님</h4>
              <h3 className="likeNum">외 10명</h3>
              <h4>이 좋아합니다</h4>
            </div>

            <div className="feed-bottom">
              <div className="feed-info">
                <h3 className="user-name">dong_s_37</h3>
                <h4 className="feed-text">고성 바닷가에서...</h4>
              </div>
              <div className="comments">
                <Comment commentArray={commentArray} />
              </div>
              <h5 className="feed-time">43분전</h5>
            </div>

            <div className="commentInput">
              <input
                className="comment-input"
                type="text"
                placeholder="댓글 달기..."
                onKeyPress={(e) => {
                  handleTotalEnter(e);
                }}
                onKeyUp={(e) => {
                  handleCommentInput(e);
                }}
              />
              <button className="comment-btn">게시</button>
            </div>
          </div>
        </div>

        <div className="main-right">
          <div className="right-top">
            <div className="storyColor">
              <img src="../../../images/profile_img_1.jpeg" alt="myImg" />
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
                    src="../../../images/profile_img_1.jpeg"
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
                  <img src="../../../images/milk_img.jpeg" alt="story_img" />
                </div>
                <div>
                  <h3>milk</h3>
                  <h5>30분 전</h5>
                </div>
              </li>
              <li>
                <div className="storyColor">
                  <img src="../../../images/wecode_img.jpeg" alt="story_img" />
                </div>
                <div>
                  <h3>wecode</h3>
                  <h5>1시간 전</h5>
                </div>
              </li>
              <li>
                <div className="storyColor">
                  <img src="../../../images/wework_img.jpeg" alt="story_img" />
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
                <div className="storyColor"></div>
                <img src="../../../images/kfc_img.jpeg" alt="story_img" />
                <div>
                  <h3>kfc</h3>
                  <h5>wecode님 외 2명이 함께 알고있습니다.</h5>
                  <h4>팔로우</h4>
                </div>
              </li>
              <li>
                <img src="../../../images/mcdonald_img.jpeg" alt="story_img" />
                <div>
                  <h3>mcdonald</h3>
                  <h5>milk님 외 1명이 함께 알고있습니다.</h5>
                  <h4>팔로우</h4>
                </div>
              </li>
              <li>
                <img src="../../../images/starbucks_img.jpeg" alt="story_img" />
                <div>
                  <h3>starbucks</h3>
                  <h5>wecode님 외 3명이 함께 알고있습니다.</h5>
                  <h4>팔로우</h4>
                </div>
              </li>
              <li>
                <img src="../../../images/wework_img.jpeg" alt="story_img" />
                <div>
                  <h3>wework</h3>
                  <h5>wecode님 외 10명이 함께 알고있습니다.</h5>
                  <h4>팔로우</h4>
                </div>
              </li>
            </ul>
          </div>
          <h5 className="right-footer">
            instagram 정보 · 지원 · 홍보 센터 · API · <br />
            채용 정보 · 개인정보처리방침 · 약관 ·<br />
            디렉터리 · 프로필 · 해시태그 · 언어
            <br />
            <br />
            © 2022 INSTAGRAM FROM META
            <br />
            <br />
            <Link to="/Login">·Logout·</Link>
          </h5>
        </div>
      </section>
    </>
  );
}

export default Main;
