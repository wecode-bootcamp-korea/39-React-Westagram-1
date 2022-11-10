import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';

const Feed = props => {
  const { feed } = props;
  return (
    <>
      <div className="feed-image-top">
        <div className="user-profile"></div>
        <img alt="user-profile-image" src={feed.userImg} />
        <span>{feed.userName}</span>
        <div className="feed-image-top-more">
          <img alt="feed-viewmore" src="/images/junghyowon/viewmore.png" />
        </div>
      </div>
      <div className="feed-image">
        <img alt="feed-image" src={feed.feedImg} />
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
          <p>좋아요 {feed.likeNum}</p>
          <span>{feed.userName}</span>
          <span>{feed.feedText}</span>
          <ul></ul>
          <span>{feed.feedTime}</span>
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
    </>
  );
};

export default Feed;
