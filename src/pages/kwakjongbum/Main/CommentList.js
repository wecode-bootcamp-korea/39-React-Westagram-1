import React from 'react';
import { useState } from 'react';

function CommentList(props) {
  return (
    <li key={props.key}>
      <span className="comment-id">{props.user}</span>
      <span className="comment-content">{props.value}</span>
      <div className="btn-wrap">
        <button type="button" className="btn-like">
          좋아요
        </button>
        <button type="button" className="btn-delete" onClick={props.commentDel}>
          삭제
        </button>
      </div>
    </li>
  );
}

export default CommentList;
