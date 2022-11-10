import React from 'react';
import './CommentList.scss';

const CommentList = ({ comment }) => {
  return (
    <li className="commentLists">
      <div className="newComment">
        <span className="pClass">johnLegend </span>
        <span> {comment} </span>
      </div>
    </li>
  );
};

export default CommentList;
