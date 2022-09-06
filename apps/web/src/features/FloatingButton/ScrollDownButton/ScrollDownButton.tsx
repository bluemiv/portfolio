import React from 'react';
import { BiDownArrowAlt } from 'react-icons/bi';
import IconButton from '../../../components/IconButton';
import { StyledScrollDownButton } from '../StyledFloatingButton';

const ScrollDownButton = ({ onClick = () => {} }: { onClick?: () => void }) => {
  return (
    <StyledScrollDownButton>
      <IconButton icon={<BiDownArrowAlt />} onClick={onClick} />
    </StyledScrollDownButton>
  );
};

export default ScrollDownButton;
