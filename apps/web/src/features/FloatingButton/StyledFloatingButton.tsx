import styled from 'styled-components';

export const StyledFloatingButton = styled.div`
  position: fixed;
`;

export const StyledThemeButton = styled(StyledFloatingButton)`
  bottom: 25px;
  right: 25px;
`;

export const StyledScrollDownButton = styled(StyledFloatingButton)`
  bottom: calc(50vh - 40px);
  right: 25px;
`;

export const StyledScrollUpButton = styled(StyledFloatingButton)`
  bottom: calc(50vh + 40px);
  right: 25px;
`;
