import ThemeButton from './ThemeButton';
import ScrollUpButton from './ScrollUpButton';
import ScrollDownButton from './ScrollDownButton';

const FloatingButton: {
  Theme: typeof ThemeButton;
  ScrollUp: typeof ScrollUpButton;
  ScrollDown: typeof ScrollDownButton;
} = {
  Theme: ThemeButton,
  ScrollUp: ScrollUpButton,
  ScrollDown: ScrollDownButton,
};

export default FloatingButton;
