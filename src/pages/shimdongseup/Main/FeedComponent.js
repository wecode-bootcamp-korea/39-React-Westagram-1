import React, { useState } from 'react';
import Comment from './Comment';

function FeedComponent(props) {
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

  return (
    <div className="article">
      <div className="feed-top">
        <div className="storyColor">
          <img
            className="profile-img"
            src={props.feedInfo.userImg}
            alt="profile-img"
          />
        </div>
        <div className="user">
          <h3 className="user-name">{props.feedInfo.userName}</h3>
          <h4 className="user-info">{props.feedInfo.userInfo}</h4>
        </div>
        <div className="material-symbols-outlined add-info-icon">
          more_horiz
        </div>
      </div>

      <img className="feed-img" src={props.feedInfo.feedImg} alt="feed-img" />
      <div className="feed-icons">
        <div onClick={heartClick} className="material-symbols-outlined heart">
          favorite
        </div>
        <img
          className="chat-icon"
          src="./images/shimdongseup/chat.png"
          alt="chat-icon"
        />
        <div className="material-symbols-outlined upload">file_upload</div>
        <div
          onClick={bookmarkClick}
          className="material-symbols-outlined bookmark"
        >
          bookmark
        </div>
      </div>

      <div className="like">
        <img src="./images/shimdongseup/wecode_img.jpeg" alt="like-img" />

        <h3>wecode</h3>
        <h4>님</h4>
        <h3 className="likeNum">외 {props.feedInfo.likeNum}명</h3>
        <h4>이 좋아합니다</h4>
      </div>

      <div className="feed-bottom">
        <div className="feed-info">
          <h3 className="user-name">{props.feedInfo.userName}</h3>
          <h4 className="feed-text">{props.feedInfo.feedText}</h4>
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
        <h5 className="feed-time">{props.feedInfo.feedTime}</h5>
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
  );
}

export default FeedComponent;
