import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { StyledHeader } from './StyledHeader';

const Header = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [hide, setHide] = useState<boolean>(true);

  useEffect(() => {
    const scrollHandler = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  useEffect(() => {
    if (scrollY >= 80 && hide) {
      setHide(false);
    }
    if (scrollY < 80 && !hide) {
      setHide(true);
    }
  }, [scrollY, hide]);

  return (
    <StyledHeader hide={hide}>
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
