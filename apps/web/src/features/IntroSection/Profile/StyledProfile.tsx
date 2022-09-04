import styled from 'styled-components';

export const StyledProfile = styled.div`
  width: 120px;
  height: 120px;
  object-fit: cover;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.style.radius.circle};

  img {
    width: 100%;
    height: 100%;
  }
`;
