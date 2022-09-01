import React, { FC, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layout';
import { HomePage } from './pages';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles';

const App: FC = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
