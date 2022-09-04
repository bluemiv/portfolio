const primaryColor = {
  light: '#dbe4ff',
  basic: '#4263eb',
  dark: '#364fc7',
};

const primaryColorForDark = {
  light: '#edf2ff',
  basic: '#91a7ff',
  dark: '#5c7cfa',
};

const secondaryColor = {
  light: '#fff0f6',
  basic: '#d6336c',
  dark: '#a61e4d',
};

const infoColor = {
  light: '#d0ebff',
  basic: '#339af0',
  dark: '#1971c2',
};

const infoColorForDark = {
  light: '#a5d8ff',
  basic: '#1c7ed6',
  dark: '#1864ab',
};

const successColor = {
  light: '#d3f9d8',
  basic: '#51cf66',
  dark: '#2f9e44',
};

const successColorForDark = {
  light: '#69db7c',
  basic: '#37b24d',
  dark: '#2b8a3e',
};

const warningColor = {
  light: '#ffe8cc',
  basic: '#ffa94d',
  dark: '#f76707',
};

const warningColorForDark = {
  light: '#ffa94d',
  basic: '#f76707',
  dark: '#d9480f',
};

const errorColor = {
  light: '#ffe3e3',
  basic: '#ff6b6b',
  dark: '#f03e3e',
};

const errorColorForDark = {
  light: '#ff8787',
  basic: '#f03e3e',
  dark: '#c92a2a',
};

const padding = {
  xs: '8px',
  sm: '14px',
  md: '24px',
  lg: '32px',
};

const radius = {
  sm: '8px',
  md: '14px',
  lg: '20px',
  circle: '100%',
};

const fontSize = {
  xm: '0.8rem',
  sm: '0.9rem',
  md: '1rem',
  lg: '1.25rem',
  xl: '1.75rem',
};

const transition = '0.2s all ease-in-out';

export const LIGHT_THEME_MODE: string = 'light';
export const DARK_THEME_MODE: string = 'dark';

export const commonStyle = {
  secondaryColor,
  padding,
  radius,
  fontSize,
  transition,
};

export const lightTheme = {
  mode: LIGHT_THEME_MODE,
  style: {
    ...commonStyle,
    primaryColor,
    infoColor,
    successColor,
    warningColor,
    errorColor,
    backgroundColor: '#ffffff',
    backgroundColorWithAlpha: 'rgba(255, 255, 255, 0.9)',
    fontColor: '#343a40',
    boxShadow: (color: string = '#f1f3f5') => `0 5px 12px 2px ${color}`,
    borderColor: '#f1f3f5',
  },
};

export const darkTheme = {
  mode: DARK_THEME_MODE,
  style: {
    ...commonStyle,
    primaryColor: primaryColorForDark,
    infoColor: infoColorForDark,
    successColor: successColorForDark,
    warningColor: warningColorForDark,
    errorColor: errorColorForDark,
    backgroundColor: '#343a40',
    backgroundColorWithAlpha: 'rgba(52, 58, 64, 0.9)',
    fontColor: '#f8f9fa',
    boxShadow: (color: string = '#212529') => `0 5px 12px 2px ${color}`,
    borderColor: '#212529',
  },
};
