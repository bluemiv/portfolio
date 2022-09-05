import React from 'react';
import { Outlet } from 'react-router-dom';
import { StyledDefaultLayout } from './StyledDefaultLayout';
import Header from '../../features/Header';

const DefaultLayout = () => {
  return (
    <StyledDefaultLayout>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </StyledDefaultLayout>
  );
};

export default DefaultLayout;
