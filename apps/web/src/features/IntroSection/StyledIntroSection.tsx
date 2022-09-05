import styled, { css } from 'styled-components';

export const StyledIntroSection = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #edf2ff;

  .profile-info {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      margin: 0;
    }

    .name {
      font-weight: bold;
    }
  }

  ${({ theme }) => {
    const { padding } = theme.style;
    return css`
      row-gap: ${padding.md};

      .profile-info {
        row-gap: ${padding.sm};
      }
    `;
  }}
`;
