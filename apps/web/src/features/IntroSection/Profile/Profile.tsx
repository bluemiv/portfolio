import React from 'react';
import { StyledProfile } from './StyledProfile';
import type { ProfileProps } from './types';

const Profile = ({ src }: ProfileProps) => {
  return (
    <StyledProfile>
      <img src={src} alt="profile" />
    </StyledProfile>
  );
};

export default Profile;
