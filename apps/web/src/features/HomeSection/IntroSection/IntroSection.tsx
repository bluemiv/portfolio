import React, { forwardRef } from 'react';
import { StyledIntroSection } from './StyledIntroSection';

const IntroSection = forwardRef<any, any>((_, ref) => {
  return (
    <StyledIntroSection ref={ref}>
      <div className="img-wrapper">
        <img src="https://avatars.githubusercontent.com/u/26136312?v=4" alt="profile" />
      </div>
      <div className="desc text-wrapper">
        <p className="name">Taehong Kim</p>
        <p className="job">Web Developer</p>
      </div>
      <div className="contact text-wrapper">
        <p className="phone">+82-10-3920-8518</p>
        <p className="email">public.bluemiv@gmail.com</p>
      </div>
    </StyledIntroSection>
  );
});

export default IntroSection;
