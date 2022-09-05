import { createGlobalStyle } from 'styled-components';
import MaruBuriExtraLight from '../assets/fonts/MaruBuri-ExtraLight.otf';
import MaruBuriLight from '../assets/fonts/MaruBuri-Light.otf';
import MaruBuriRegular from '../assets/fonts/MaruBuri-Regular.otf';
import MaruBuriSemiBold from '../assets/fonts/MaruBuri-SemiBold.otf';
import MaruBuriBold from '../assets/fonts/MaruBuri-Bold.otf';

const FontStyle = createGlobalStyle`
    @font-face {
      font-family: 'Maruburi';
      font-weight: 100;
      font-style: normal;
      src: url('${MaruBuriExtraLight}') format('opentype');
    }
    @font-face {
      font-family: 'Maruburi';
      font-weight: 300;
      font-style: normal;
      src: url('${MaruBuriLight}') format('opentype');
    }
    @font-face {
      font-family: 'Maruburi';
      font-weight: normal;
      font-style: normal;
      src: url('${MaruBuriRegular}') format('opentype');
    }
    @font-face {
      font-family: 'Maruburi';
      font-weight: 500;
      font-style: normal;
      src: url('${MaruBuriSemiBold}') format('opentype');
    }
    @font-face {
      font-family: 'Maruburi';
      font-weight: bold;
      font-style: normal;
      src: url('${MaruBuriBold}') format('opentype');
    }
`;

export default FontStyle;
