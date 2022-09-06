import React from 'react';
import { BiMoon, BiSun } from 'react-icons/bi';
import { useRecoilState } from 'recoil';
import { themeState } from '../../../recoil';
import { darkTheme, LIGHT_THEME_MODE, lightTheme } from '../../../styles';
import IconButton from '../../../components/IconButton';
import { StyledThemeButton } from '../StyledFloatingButton';

const ThemeButton = () => {
  const [theme, setTheme] = useRecoilState(themeState);
  const isLightTheme = theme.mode === LIGHT_THEME_MODE;

  const onClickToggleTheme = () => {
    const nextTheme = isLightTheme ? darkTheme : lightTheme;
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme.mode);
  };

  return (
    <StyledThemeButton>
      <IconButton icon={isLightTheme ? <BiMoon /> : <BiSun />} onClick={onClickToggleTheme} />
    </StyledThemeButton>
  );
};

export default ThemeButton;
