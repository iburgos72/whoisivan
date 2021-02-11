import React from 'react';

const Header = () => {
  return (
    <div className="full-width">
      <div className="full-width flex justify-center">
        <span>{`WHO IS `}</span> <span>IVAN</span>
      </div>
      <div className="navbar full-width flex space-around">
        <a>About</a>
        <a>Skill</a>
        <a>Experience</a>
        <a>Projects</a>
      </div>
    </div>
  )
};

export default Header;
