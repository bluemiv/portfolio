import React, { FC } from 'react';
import { StyledProfile } from './StyledProfile';
import type { ProfileProps } from './types';

const Profile: FC<ProfileProps> = ({ src }) => {
  return (
    <StyledProfile>
      <img src={src} alt="profile" />
    </StyledProfile>
  );
};

export default Profile;
