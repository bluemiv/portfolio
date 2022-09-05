import React from 'react';
import { StyledIntroSection } from './StyledIntroSection';
import Profile from './Profile';

const IntroSection = () => {
  return (
    <StyledIntroSection>
      <Profile src="https://avatars.githubusercontent.com/u/26136312?v=4" />
      <div className="profile-info">
        <p className="name">Taehong Kim</p>
        <p className="job">Web Developer</p>
      </div>
    </StyledIntroSection>
  );
};

export default IntroSection;
