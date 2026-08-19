import { createTheme } from '@mui/material/styles';
import { paletteColors } from './palette';
import { fontSizes, fontWeights, lineHeights } from './typography';
import './types';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: paletteColors.blue,
    },
    secondary: {
      main: paletteColors.red,
    },
    error: {
      main: paletteColors.red,
    },
    warning: {
      main: paletteColors.strengthFair,
    },
    info: {
      main: paletteColors.cyan,
    },
    success: {
      main: paletteColors.strengthStrong,
    },
    background: {
      default: paletteColors.bg,
      paper: paletteColors.card,
    },
    text: {
      primary: paletteColors.text,
      secondary: paletteColors.textMuted,
      disabled: paletteColors.textLabel,
    },
    divider: paletteColors.divider,
    cyan: {
      main: paletteColors.cyan,
    },
    input: {
      bg: paletteColors.inputBg,
      border: paletteColors.inputBorder,
      borderHover: paletteColors.inputBorderHover,
    },
    strength: {
      weak: paletteColors.strengthWeak,
      fair: paletteColors.strengthFair,
      good: paletteColors.strengthGood,
      strong: paletteColors.strengthStrong,
      track: paletteColors.strengthTrack,
    },
    glow: {
      blue: paletteColors.glowBlue,
      red: paletteColors.glowRed,
    },
    shadow: paletteColors.shadow,
  },
  gradients: {
    brand: `linear-gradient(90deg, ${paletteColors.blue} 0%, ${paletteColors.red} 100%)`,
    cardBorder: `linear-gradient(135deg, ${paletteColors.cyan} 0%, ${paletteColors.blue} 40%, ${paletteColors.red} 100%)`,
  },
  fontSizes,
  fontWeights,
  lineHeights,
  typography: {
    fontFamily: "'Exo 2', 'Segoe UI', sans-serif",
    fontWeightRegular: fontWeights.regular,
    fontWeightMedium: fontWeights.medium,
    fontWeightBold: fontWeights.bold,
  },
  shape: {
    borderRadius: 10,
  },
});
