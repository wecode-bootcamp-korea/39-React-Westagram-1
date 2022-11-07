import React from 'react';
import './KwakMain.scss';
import CommentList from './CommentList';
import { useState } from 'react';

function KwakMain() {
  const user = 'wecode';
  const [comment, setComment] = useState([]);
  const [value, setValue] = useState('');
  const [btn, setBtn] = useState(true);

  const inputVal = e => {
    setValue(e.target.value);
  };

  const btnActive = () => {
    value.length > 0 ? setBtn(false) : setBtn(true);
  };

  const commentAdd = () => {
    let copyComment = [...comment];
    copyComment.push(value);
    setComment(copyComment);
    setValue('');
  };

  return (
    <div className="wrap">
      <div className="header">
        <div className="inner">
          <h1 className="logo">
            <a>
              <img src="/images/kwakjongbum/icon-insta.png" alt="인스타" />
              westagram
            </a>
          </h1>
          <div className="search-input">
            <input type="text" placeholder="검색" />
          </div>
          <div className="link-area">
            <button type="button" className="link-btn explore">
              탐색
            </button>
            <button type="button" className="link-btn heart new">
              좋아요
            </button>
            <button type="button" className="link-btn profile">
              프로필
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="l-content">
          <div className="feed-box">
            <div className="feed-top">
              <img src="/images/kwakjongbum/img1.jpg" alt="샘플" />
              <span className="user-id">canon_mj</span>
              <div className="btn-box">
                <button type="button" className="btn-more">
                  더보기
                </button>
              </div>
            </div>
            <div className="feed-img">
              <img src="/images/kwakjongbum/img3.jpg" alt="샘플" />
            </div>
            <div className="feed-info">
              <div className="btn-area">
                <div className="l-btn">
                  <span className="btn-like">
                    <input type="checkbox" id="btnLike" />
                    <label htmlFor="btnLike">좋아요</label>
                  </span>
                  <button type="button" className="btn-comment">
                    댓글
                  </button>
                  <button type="button" className="btn-share">
                    공유
                  </button>
                </div>
                <span className="btn-bookmark">
                  <input type="checkbox" id="btnBookmark" />
                  <label htmlFor="btnBookmark">북마크</label>
                </span>
              </div>
              <div className="state-area">
                <span className="icon">
                  <img src="/images/kwakjongbum/img2.jpg" alt="샘플" />
                </span>
                <p className="text">
                  <span className="state-id">aineword</span>님 외
                  <span className="num">10명</span>이 좋아합니다
                </p>
              </div>
              <div className="comment-area">
                <div className="my">
                  <span className="comment-id">canon_mj</span>
                  <span className="comment-content">
                    위워크에서 진행한 베이킹 클래스 너무 좋았습니다.
                  </span>
                  <button type="button" className="btn-txt">
                    더 보기
                  </button>
                </div>
                <ul className="comment-list">
                  <li>
                    <span className="comment-id">jjongbum92</span>
                    <span className="comment-content">test</span>
                    <div className="btn-wrap">
                      <button type="button" className="btn-like">
                        좋아요
                      </button>
                      <button type="button" className="btn-delete">
                        삭제
                      </button>
                    </div>
                  </li>
                  {comment.map((value, i) => (
                    <CommentList
                      user={user}
                      value={value}
                      key={i}
                      commentDel={() => {
                        const copyComment = [...comment];
                        copyComment.splice(i, 1);
                        setComment(copyComment);
                      }}
                    />
                  ))}
                </ul>
              </div>
              <p className="time">
                <span>42분</span>전
              </p>
            </div>
          </div>
          <div className="feed-input">
            <input
              type="text"
              placeholder="댓글 달기..."
              onKeyUp={btnActive}
              onChange={inputVal}
              value={value}
              onKeyPress={e => {
                if (e.key === 'Enter' && value.length > 0) {
                  commentAdd();
                }
              }}
            />
            <button
              type="button"
              className="btn-post"
              disabled={btn}
              onClick={commentAdd}
            >
              게시
            </button>
          </div>
        </div>
        <div className="r-content">
          <div className="profile-box">
            <span className="img">
              <img src="/images/kwakjongbum/wecode_logo.webp" />
            </span>
            <div className="box">
              <p className="name">wecode_bootcamp</p>
              <ul className="info">
                <li>WeCode</li>
                <li>위코드</li>
              </ul>
            </div>
          </div>
          <div className="line-box">
            <div className="tit-area">
              <span className="tit">스토리</span>
              <button type="button" className="btn-all">
                모두 보기
              </button>
            </div>
            <ul className="user-list">
              <li>
                <span className="img">
                  <img src="/images/kwakjongbum/img4.jpg" alt="샘플" />
                </span>
                <p className="id">_yum_S</p>
                <p className="time">
                  <span>16분</span>전
                </p>
              </li>
              <li>
                <span className="img">
                  <img src="/images/kwakjongbum/img4.jpg" alt="샘플" />
                </span>
                <p className="id">drink_eat_drink</p>
                <p className="time">
                  <span>3시간</span>전
                </p>
              </li>
              <li>
                <span className="img">
                  <img src="/images/kwakjongbum/img4.jpg" alt="샘플" />
                </span>
                <p className="id">hyukyc</p>
                <p className="time">
                  <span>20시간</span>전
                </p>
              </li>
              <li>
                <span className="img">
                  <img src="/images/kwakjongbum/img4.jpg" alt="샘플" />
                </span>
                <p className="id">jminkeek</p>
                <p className="time">
                  <span>1일</span>전
                </p>
              </li>
              <li>
                <span className="img">
                  <img src="/images/kwakjongbum/img4.jpg" alt="샘플" />
                </span>
                <p className="id">zzang</p>
                <p className="time">
                  <span>2일</span>전
                </p>
              </li>
            </ul>
          </div>
          <div className="line-box">
            <div className="tit-area">
              <span className="tit">회원님을 위한 추천</span>
              <button type="button" className="btn-all">
                모두 보기
              </button>
            </div>
            <ul className="user-list">
              <li>
                <span className="img">
                  <img src="/images/kwakjongbum/img5.jpg" alt="샘플" />
                </span>
                <p className="id">joaaaaahye</p>
                <p className="txt">
                  <span>_legend_a</span>님 외 <span>2</span>명이 팔로우 합니다.
                </p>
                <button type="button" className="btn-follow">
                  팔로우
                </button>
              </li>
              <li>
                <span className="img">
                  <img src="/images/kwakjongbum/img5.jpg" alt="샘플" />
                </span>
                <p className="id">rampart81</p>
                <p className="txt">
                  <span>ringo.in.seoul</span>님 외 <span>12</span>명이 팔로우
                  합니다.
                </p>
                <button type="button" className="btn-follow">
                  팔로우
                </button>
              </li>
              <li>
                <span className="img">
                  <img src="/images/kwakjongbum/img5.jpg" alt="샘플" />
                </span>
                <p className="id">shawnjjoo</p>
                <p className="txt">
                  <span>jimmylee1220</span>님 외 <span>18</span>명이 팔로우
                  합니다.
                </p>
                <button type="button" className="btn-follow">
                  팔로우
                </button>
              </li>
            </ul>
          </div>
          <ul className="info-txt">
            <li>Instagram 정보</li>
            <li>지원</li>
            <li>홍보 센터</li>
            <li>API</li>
            <li>채용 정보</li>
            <li>개인정보처리방침</li>
            <li>약관</li>
            <li>디렉터리</li>
            <li>프로필</li>
            <li>해시태그</li>
            <li>언어</li>
          </ul>
          <p className="cop">ⓒ 2019 INSTAGRAM</p>
        </div>
      </div>
    </div>
  );
}

export default KwakMain;
