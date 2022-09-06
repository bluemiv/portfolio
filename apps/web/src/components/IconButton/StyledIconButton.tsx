import styled, { css } from 'styled-components';

export const StyledIconButton = styled.button`
  text-align: center;
  border: none;
  width: 55px;
  height: 55px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => {
    const { padding, primaryColor, backgroundColor, fontColor, radius, boxShadow } = theme.style;
    return css`
      box-shadow: ${boxShadow()};
      border-radius: ${radius.circle};
      padding: ${padding.sm};
      background-color: ${backgroundColor};
      color: ${fontColor};

      &:hover {
        color: ${primaryColor.dark};
      }
    `;
  }}
`;
