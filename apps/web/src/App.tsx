import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { DefaultLayout } from './layout';
import { HomePage } from './pages';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { themeState } from './recoil';
import FontStyle from './styles/FontStyle';

const App: FC = () => {
  const [theme] = useRecoilState(themeState);

  return (
    <ThemeProvider theme={theme}>
      <FontStyle />
      <GlobalStyle />
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
