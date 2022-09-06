import React, { forwardRef } from 'react';
import { StyledContactSection } from './StyledContactSection';

const ContactSection = forwardRef<any, any>((_, ref) => {
  return <StyledContactSection ref={ref}>contact</StyledContactSection>;
});

export default ContactSection;
