import styled, { css, keyframes } from 'styled-components';
import type { StyledHeaderProps } from './types';

const headerShow = keyframes`
  from {
    top: -80px;
  }
  to {
    top: 0;
  }
`;

const headerHide = keyframes`
  from {
    top: 0;
  }
  to {
    top: -80px;
  }
`;

export const StyledHeader = styled.header<StyledHeaderProps>`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  animation-timing-function: linear;

  .title {
    font-weight: bold;
  }

  nav ul {
    flex: 1;
    display: flex;
    list-style: none;
  }

  ${({ hidden }) => {
    if (hidden) {
      return css`
        animation: ${headerHide};
      `;
    }
    return css`
      animation: ${headerShow};
    `;
  }}

  ${({ theme }) => {
    const { primaryColor, padding, boxShadow, transition } = theme.style;

    return css`
      padding: 0 ${padding.md};
      box-shadow: ${boxShadow()};
      transition: ${transition};

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
