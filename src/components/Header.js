import React from "react";
import './HomePageEnglish.css';
import './Header.css';


const Header= (props) => {
  return (
    <div className = "Header">
        <nav>
            <a href={`/${props.lang}`} onClick={() => props.updatePage('/')}>Home</a>
            <a href={`/about/${props.lang}`} onClick={() => props.updatePage('/about/')}>Project</a>
            <a href={`/skill`}>Skill</a>
            <div>
            <a href={`${props.path}en`} onClick={() => props.updateState('en')}>EN</a>
            <a href={`${props.path}fi`} onClick={() => props.updateState('fi')}>FI</a></div>
        </nav>
        <hr />
      </div>
  );
}

export default Header;