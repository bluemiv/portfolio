import styled, { css } from 'styled-components';
import { showText } from '../../../styles/keyframes';

const profileImageSize = '130px';

export const StyledIntroSection = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .img-wrapper {
    width: ${profileImageSize};
    height: ${profileImageSize};
    object-fit: cover;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .text-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      margin: 0;
    }
  }

  .desc .name {
    font-weight: bold;
  }

  ${({ theme }) => {
    const { padding, radius, fontSize, boxShadow } = theme.style;
    return css`
      row-gap: ${padding.md};
      .img-wrapper {
        border-radius: ${radius.circle};
        box-shadow: ${boxShadow()};
      }
      .text-wrapper {
        row-gap: ${padding.sm};
      }
      .desc {
        font-size: ${fontSize.lg};
      }
      .contact {
        font-size: ${fontSize.sm};
      }
    `;
  }}

  // animation
  .img-wrapper,
  .text-wrapper > p {
    animation-name: ${showText};
    animation-duration: 0.5s;
  }
  .desc {
    .name {
      animation-delay: 0.1s;
    }
    .job {
      animation-delay: 0.15s;
    }
  }
  .contact {
    .phone {
      animation-delay: 0.2s;
    }
    .email {
      animation-delay: 0.25s;
    }
  }
`;
