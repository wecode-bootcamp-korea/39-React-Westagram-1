import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Comment from './Comment';
import SearchUser from './SearchUser.js';

function ShimMain() {
  let navigate = useNavigate();
  let gotoLogin = () => {
    navigate('/ShimLogin');
  };

  //인풋받은 댓글을 배열로 저장
  const [comment, setComment] = useState('');
  const [commentArray, setCommentArray] = useState([
    { userId: `wecode`, comment: '첫번째 댓글' },
  ]);

  function handleCommentInput(e) {
    setComment(e.target.value);
    //게시버튼의 disable 설정
    if (e.target.value) {
      setVaild(false);
    } else {
      setVaild(true);
    }
  }
  function handleTotalEnter(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      const repoArray = [...commentArray];
      if (e.target.value !== '') {
        repoArray.push({ userId: 'wecode', comment: comment });
        setCommentArray(repoArray);
        setComment('');
      }
    }
  }

  //게시 버튼으로 댓글 등록
  function clickRegister() {
    const repoArray = [...commentArray];
    repoArray.push({ userId: 'wecode', comment: comment });
    setCommentArray(repoArray);
    setComment('');
  }

  //유저 검색 기능
  const [searchInput, setSearchInput] = useState('');

  function inputSearch(e) {
    setSearchInput(e.target.value);
  }

  //댓글 개시버튼 활성화
  const [vaild, setVaild] = useState(true);

  //좋아요,북마크 기능
  function heartClick(e) {
    if (e.target.className === 'material-symbols-outlined heart') {
      e.target.className = 'material-icons heart';
      e.target.style.color = '#ed4956';
    } else {
      e.target.className = 'material-symbols-outlined heart';
      e.target.style.color = null;
    }
  }

  function bookmarkClick(e) {
    if (e.target.className === 'material-symbols-outlined bookmark') {
      e.target.className = 'material-icons bookmark';
      e.target.style.color = '#3897f0';
    } else {
      e.target.className = 'material-symbols-outlined bookmark';
      e.target.style.color = null;
    }
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
          <div className="article">
            <div className="feed-top">
              <div className="storyColor">
                <img
                  className="profile-img"
                  src="./images/shimdongseup/profile_img_1.jpeg"
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
              src="./images/shimdongseup/feed_img_1.JPG"
              alt="feed-img"
            />
            <div className="feed-icons">
              <div
                onClick={heartClick}
                className="material-symbols-outlined heart"
              >
                favorite
              </div>
              <img
                className="chat-icon"
                src="./images/shimdongseup/chat.png"
                alt="chat-icon"
              />
              <div className="material-symbols-outlined upload">
                file_upload
              </div>
              <div
                onClick={bookmarkClick}
                className="material-symbols-outlined bookmark"
              >
                bookmark
              </div>
            </div>

            <div className="like">
              <img
                src="./images/shimdongseup/profile_img_1.jpeg"
                alt="like-img"
              />

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
                {commentArray.map((obj, i) => {
                  return (
                    <Comment
                      deleteComment={function deleteComment() {
                        const deletedComment = [...commentArray];
                        deletedComment.splice(i, 1);
                        setCommentArray(deletedComment);
                      }}
                      heartClick={heartClick}
                      commentArray={commentArray}
                      obj={obj}
                      key={i}
                    />
                  );
                })}
              </div>
              <h5 className="feed-time">43분전</h5>
            </div>

            <div className="commentInput">
              <input
                className="comment-input"
                type="text"
                placeholder="댓글 달기..."
                value={comment}
                onKeyPress={handleTotalEnter}
                onChange={handleCommentInput}
              />
              <button
                onClick={clickRegister}
                className="comment-btn"
                disabled={vaild}
              >
                게시
              </button>
            </div>
          </div>
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
                <div className="storyColor"></div>
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

export default ShimMain;
