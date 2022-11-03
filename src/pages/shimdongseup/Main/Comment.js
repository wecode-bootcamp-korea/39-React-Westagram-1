import React from 'react';

function Comment(props) {
  return (
    <div className="comment">
      <h3 className="comment-user">{props.obj['userId']}</h3>
      <h4 className="comment-text">{props.obj['comment']}</h4>
      <div
        onClick={props.deleteComment}
        className="material-symbols-outlined delete"
      >
        delete
      </div>
      <div
        onClick={props.heartClick}
        className="material-symbols-outlined heart"
      >
        favorite
      </div>
    </div>
  );
}

export default Comment;
