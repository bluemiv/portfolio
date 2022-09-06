import React, { forwardRef } from 'react';
import { StyledAboutSection } from './StyledAboutSection';

const AboutSection = forwardRef<any, any>((_, ref) => {
  return <StyledAboutSection ref={ref}>about</StyledAboutSection>;
});

export default AboutSection;
