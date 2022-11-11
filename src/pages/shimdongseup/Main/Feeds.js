import React, { useEffect, useState } from 'react';
import FeedComponent from './FeedComponent';

function Feeds() {
  const [feedLists, setFeedLists] = useState([]);

  useEffect(() => {
    fetch('/data/shimdongseup/feedList.json')
      .then(response => response.json())
      .then(result => setFeedLists(result));
  }, []);

  const feeds = feedLists.map((feedInfo, index) => {
    return <FeedComponent feedInfo={feedInfo} key={index} />;
  });
  return feeds;
}

export default Feeds;
