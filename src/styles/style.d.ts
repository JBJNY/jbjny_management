/* eslint-disable camelcase */
// global css type 선언
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      black: string;
      darkPink: string;
      lightPink: string;
      darkGreen: string;
      brown: string;
      gray: string;
      darkGray: string;
      darkRed: string;
      earth: string;
    };
    size: {
      mobile: string;
      tablet: string;
      laptop: string;
      desktop: string;
    };
  }
}
