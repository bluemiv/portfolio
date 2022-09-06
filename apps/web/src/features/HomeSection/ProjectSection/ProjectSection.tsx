import React, { forwardRef } from 'react';
import { StyledProjectSection } from './StyledProjectSection';

const ProjectSection = forwardRef<any, any>((_, ref) => {
  return <StyledProjectSection ref={ref}>project</StyledProjectSection>;
});

export default ProjectSection;
