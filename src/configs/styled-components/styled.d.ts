import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    measures: { horizontalDistance: number };
    fonts: {
      primary: string;
    };
    colors: {
      primary: string;
      primaryLight: string;
      secondary: string;
      secondaryLight: string;
      light: string;
    };
  }
}
