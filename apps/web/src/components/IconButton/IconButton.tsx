import React from 'react';
import { IconButtonProps } from './types';
import { StyledIconButton } from './StyledIconButton';

const IconButton = ({ icon, onClick = () => {} }: IconButtonProps) => {
  return <StyledIconButton onClick={onClick}>{icon}</StyledIconButton>;
};

export default IconButton;
