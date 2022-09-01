import styled from 'styled-components';

export const StyledProfile = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .image-wrapper {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    overflow: hidden;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .intro-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    & > .name {
      font-weight: bold;
    }
    & > .job {
    }
  }
`;
