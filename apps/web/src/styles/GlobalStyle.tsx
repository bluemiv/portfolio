import { createGlobalStyle, css, ThemeType } from 'styled-components';
import normalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  ${normalize}
  #root {
    font-size: 16px;

    a {
      text-decoration: none;
      cursor: pointer;
    }

    button {
      cursor: pointer;
    }
  }

  ${({ theme }) => {
    const { fontColor, backgroundColor, primaryColor, transition } = theme.style;
    return css`
      body #root {
        color: ${fontColor};
        background-color: ${backgroundColor};
      }

      a {
        color: ${fontColor};

        &:hover {
          color: ${primaryColor.basic};
        }
      }

      a,
      button {
        transition: ${transition};
      }
    `;
  }}
`;

export default GlobalStyle;
