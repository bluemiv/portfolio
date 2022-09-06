import React from 'react';
import { BiUpArrowAlt } from 'react-icons/bi';
import IconButton from '../../../components/IconButton';
import { StyledScrollUpButton } from '../StyledFloatingButton';

const ScrollUpButton = ({ onClick = () => {} }: { onClick?: () => void }) => {
  return (
    <StyledScrollUpButton>
      <IconButton icon={<BiUpArrowAlt />} onClick={onClick} />
    </StyledScrollUpButton>
  );
};

export default ScrollUpButton;
