import React, { useEffect, useState } from 'react';

function SearchUser(props) {
  const [userList, setUserLists] = useState([]);

  useEffect(() => {
    fetch('/data/shimdongseup/searchUserList.json')
      .then(response => response.json())
      .then(result => setUserLists(result));
  }, []);

  const searchDiv = userList.map((obj, i) => {
    if (obj.userId.includes(props.searchInput)) {
      return (
        <div key={i} className="searchedUser">
          <img src={obj.userImg} alt="filtered user" />
          <div className="user-name">{obj.userId}</div>
        </div>
      );
    }
  });
  return searchDiv;
}

export default SearchUser;
