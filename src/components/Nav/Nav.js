import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
      <div className="links">
        <Link to={'/KwakMain'}>
          <div>Kwak</div>
        </Link>
        <Link to={'/KimMain'}>
          <div>Kim</div>
        </Link>
        <Link to={'/ShimMain'}>
          <div>Shim</div>
        </Link>
        <Link to={'/JungMain'}>
          <div>Jung</div>
        </Link>
        <Link to={'/JoMain'}>
          <div>Jo</div>
        </Link>
      </div>
    </>
  );
}

export default Nav;
