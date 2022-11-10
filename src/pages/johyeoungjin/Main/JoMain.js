import React from 'react';
import { useState } from 'react';
import './JoMain.scss';

const JoMain = () => {
  const [commentInput, setCommentInput] = useState('');
  const [commentList, setCommentList] = useState([]);
  const active = commentInput.length > 5;

  const saveCommentInput = event => {
    setCommentInput(event.target.value);
  };

  const handleClickBtn = () => {
    setCommentList([...commentList, commentInput]);
  };

  console.log(commentList);

  return (
    <>
      <div className="main-container">
        <div className="container">
          <div className="nav">
            <div className="barLeft">
              <i className="fa-brands fa-instagram"></i>
              <span className="title">westagram</span>
            </div>

            <div className="navSearchFrame">
              <i class="fa-solid fa-magnifying-glass"></i>
              <input className="navSearch" type="text" placeholder="검색" />
            </div>

            <div className="barRight">
              <i className="fa-regular fa-compass navCompass"></i>
              <i className="fa-regular fa-heart navHeart"></i>
              <i className="fa-regular fa-user navUser"></i>
            </div>
          </div>
        </div>

        <div>
          <div className="feeds">
            <div className="article">
              <div className="feedsBar">
                <img
                  className="proImg"
                  src="/images/johyeoungjin/charlesdeluvio-Mv9hjnEUHR4-unsplash.png"
                  art="dog"
                />
                <span className="nickName">underdog</span>
                <i className="fa-solid fa-ellipsis"></i>
              </div>
              <img
                className="mainImg"
                src="/images/johyeoungjin/charlesdeluvio-Mv9hjnEUHR4-unsplash.jpg"
                alt="dog"
              />

              <div className="likeBar">
                <i className="fa-solid fa-heart likeBarHeart"></i>
                <i className="fa-regular fa-message"></i>
                <i className="fa-solid fa-arrow-up-from-bracket bracket"></i>
                <i className="fa-regular fa-bookmark bookmark"></i>
              </div>

              <div className="likeBar2">
                <img
                  className="likeImg"
                  src="/images/johyeoungjin/charlesdeluvio-Mv9hjnEUHR4-unsplash.png"
                  alt="dog"
                />
                <span className="likeComent">
                  <span className="nickNameBold">underdog</span>님
                  <span className="nickNameBold">외 962명</span>이 좋아합니다
                </span>
              </div>
              {commentList.map(comment => {
                return <span key={comment}>{comment}</span>;
              })}
              <div className="articleComentFrame">
                <input
                  className="commentInput"
                  type={'text'}
                  placeholder="댓글달기..."
                  value={commentInput}
                  onChange={saveCommentInput}
                />
                <button disabled={!active} onClick={handleClickBtn}>
                  게시
                </button>
              </div>
            </div>
          </div>
          <div className="main-right">
            <div className="main-right-top"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default JoMain;
