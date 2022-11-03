import React from 'react';

function SearchUser(props) {
  const userList = [
    {
      userId: 'dong_s_37',
      userImg: './images/shimdongseup/dong_s_37_img.jpeg',
    },
    { userId: 'milk', userImg: './images/shimdongseup/milk_img.jpeg' },
    { userId: 'wecode', userImg: './images/shimdongseup/wecode_img.jpeg' },
    { userId: 'wework', userImg: './images/shimdongseup/wework_img.jpeg' },
    {
      userId: 'starbucks',
      userImg: './images/shimdongseup/starbucks_img.jpeg',
    },
    { userId: 'kfc', userImg: './images/shimdongseup/kfc_img.jpeg' },
    { userId: 'mcdonald', userImg: './images/shimdongseup/mcdonald_img.jpeg' },
  ];

  const searchDiv = userList.map((obj, i) => {
    if (obj.userId.indexOf(props.searchInput) > -1) {
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
