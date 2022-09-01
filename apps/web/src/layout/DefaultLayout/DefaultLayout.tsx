import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import SideMenu from '../../features/SideMenu';
import { StyledDefaultLayout } from './StyledDefaultLayout';

const DefaultLayout: FC = () => {
  return (
    <StyledDefaultLayout>
      <SideMenu />
      <main>
        <Outlet />
        <footer>footer</footer>
      </main>
    </StyledDefaultLayout>
  );
};

export default DefaultLayout;
