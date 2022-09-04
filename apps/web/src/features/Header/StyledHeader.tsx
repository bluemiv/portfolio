import styled, { css } from 'styled-components';

export const StyledHeader = styled.header`
  display: none;
  height: 60px;
  align-items: center;
  position: sticky;

  .title {
    font-weight: bold;
  }

  nav ul {
    flex: 1;
    display: flex;
    list-style: none;
    li a {
    }
  }

  ${({ theme }) => {
    const { primaryColor, padding, boxShadow } = theme.style;
    return css`
      padding: 0 ${padding.md};
      box-shadow: ${boxShadow()};

      nav ul {
        column-gap: ${padding.md};
        li a {
          &:hover {
            color: ${primaryColor.basic};
          }
        }
      }
    `;
  }}
`;
