import type { PaletteColor, SimplePaletteColorOptions } from '@mui/material/styles';
import type { fontSizes, fontWeights, lineHeights } from './typography';

declare module '@mui/material/styles' {
  interface Palette {
    cyan: PaletteColor;
    input: {
      bg: string;
      border: string;
      borderHover: string;
    };
    strength: {
      weak: string;
      fair: string;
      good: string;
      strong: string;
      track: string;
    };
    glow: {
      blue: string;
      red: string;
    };
    shadow: string;
  }

  interface PaletteOptions {
    cyan?: SimplePaletteColorOptions;
    input?: {
      bg: string;
      border: string;
      borderHover: string;
    };
    strength?: {
      weak: string;
      fair: string;
      good: string;
      strong: string;
      track: string;
    };
    glow?: {
      blue: string;
      red: string;
    };
    shadow?: string;
  }

  interface Theme {
    gradients: {
      brand: string;
      cardBorder: string;
    };
    fontSizes: typeof fontSizes;
    fontWeights: typeof fontWeights;
    lineHeights: typeof lineHeights;
  }

  interface ThemeOptions {
    gradients?: {
      brand: string;
      cardBorder: string;
    };
    fontSizes?: typeof fontSizes;
    fontWeights?: typeof fontWeights;
    lineHeights?: typeof lineHeights;
  }
}
