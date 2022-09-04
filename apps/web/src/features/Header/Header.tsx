import React, { FC } from 'react';
import { StyledHeader } from './StyledHeader';
import { NavLink } from 'react-router-dom';

const Header: FC = () => {
  return (
    <StyledHeader>
      <div className="title">TAEHONG KIM</div>
      <nav>
        <ul>
          <li>
            <NavLink to="">ABOUT ME</NavLink>
          </li>
          <li>
            <NavLink to="">SKILLS</NavLink>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
