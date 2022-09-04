import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledDefaultLayout } from './StyledDefaultLayout';
import Header from '../../features/Header';

const DefaultLayout: FC = () => {
  return (
    <StyledDefaultLayout>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
      <footer>footer</footer>
      <footer>footer</footer>
      <footer>footer</footer>
      <footer>footer</footer>
      <footer>footer</footer>
      <footer>footer</footer>
      <footer>footer</footer>
      <footer>footer</footer>
      <footer>footer</footer>
      <footer>footer</footer>
      <footer>footer</footer>
    </StyledDefaultLayout>
  );
};

export default DefaultLayout;
