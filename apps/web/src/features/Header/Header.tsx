import React, { FC, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { debounce } from 'lodash';
import { StyledHeader } from './StyledHeader';

const Header: FC = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [hidden, setHidden] = useState<boolean>(true);

  useEffect(() => {
    const scrollHandler = debounce(() => setScrollY(window.scrollY), 100);
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  useEffect(() => {
    if (scrollY >= 80 && hidden) {
      setHidden(false);
    }
    if (scrollY < 80 && !hidden) {
      setHidden(true);
    }
  }, [scrollY, hidden]);

  return (
    <StyledHeader hidden={hidden}>
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
