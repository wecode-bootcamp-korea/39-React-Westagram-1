import React from "react";

function Comment(props) {
  const changedArray = props.commentArray.map((obj, i) => {
    return (
      <div key={i} className="comment">
        <h3 className="comment-user">{obj["userId"]}</h3>
        <h4 className="comment-text">{obj["comment"]}</h4>
        <div className="material-symbols-outlined delete">delete</div>
        <div className="material-symbols-outlined heart">favorite</div>
      </div>
    );
  });
  return changedArray;
}

export default Comment;
