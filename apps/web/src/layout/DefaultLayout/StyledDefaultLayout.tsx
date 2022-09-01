import styled from 'styled-components';

export const StyledDefaultLayout = styled.div`
  display: flex;
  box-sizing: border-box;

  & > main {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;
