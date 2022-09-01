import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layout';
import { HomePage } from './pages';

const App: FC = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
