import { LIGHT_THEME_MODE, DARK_THEME_MODE, lightTheme, darkTheme } from './styles';

declare module 'styled-components' {
  export interface ThemeType {
    mode: LIGHT_THEME_MODE | DARK_THEME_MODE;
    style: typeof lightTheme.style | typeof darkTheme.style;
  }
}
