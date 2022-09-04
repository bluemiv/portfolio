import { atom } from 'recoil';
import { darkTheme, DARK_THEME_MODE, lightTheme } from '../styles';

const isDarkTheme = localStorage.getItem('theme') === DARK_THEME_MODE;

export const themeState = atom({
  key: 'themeState',
  default: isDarkTheme ? darkTheme : lightTheme,
});
