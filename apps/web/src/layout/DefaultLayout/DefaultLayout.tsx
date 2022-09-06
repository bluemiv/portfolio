import React from 'react';
import { Outlet } from 'react-router-dom';
import { StyledDefaultLayout } from './StyledDefaultLayout';

const DefaultLayout = () => {
  return (
    <StyledDefaultLayout>
      <main>
        <Outlet />
      </main>
    </StyledDefaultLayout>
  );
};

export default DefaultLayout;
