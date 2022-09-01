import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

const DefaultLayout: FC = () => {
  return (
    <>
      <header>header</header>
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </>
  );
};

export default DefaultLayout;
