import styled, { css } from 'styled-components';
import type { StyledHeaderProps } from './types';

export const StyledHeader = styled.header<StyledHeaderProps>`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  top: -60px;
  backdrop-filter: blur(4px);

  .title {
    font-weight: bold;
  }

  nav ul {
    flex: 1;
    display: flex;
    list-style: none;
  }

  ${({ hide }) => {
    if (hide) {
      return css`
        top: -60px;
      `;
    }
    return css`
      top: 0;
    `;
  }}

  ${({ theme }) => {
    const { primaryColor, padding, transition, backgroundColorWithAlpha } = theme.style;

    return css`
      padding: 0 ${padding.md};
      transition: ${transition('top')};
      background-color: ${backgroundColorWithAlpha};

      nav ul {
        column-gap: ${padding.md};

        li a {
          transition: ${transition('color')};
          &:hover {
            color: ${primaryColor.basic};
          }
        }
      }
    `;
  }}
`;
