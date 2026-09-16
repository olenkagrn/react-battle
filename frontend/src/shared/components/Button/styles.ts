import type { SxProps, Theme } from '@mui/material';
import { fontSizes, fontWeights } from '@/shared/theme';

export const button: SxProps<Theme> = (theme) => ({
  borderRadius: '10px',
  textTransform: 'uppercase',
  fontWeight: fontWeights.bold,
  fontSize: fontSizes.l,
  py: 1.5,
  boxShadow: 'none',
  backgroundImage: theme.gradients.brand,
  color: 'text.primary',
  '&:hover': {
    backgroundImage: theme.gradients.brand,
    filter: 'brightness(1.08)',
    boxShadow: `0 0 24px ${theme.palette.glow.blue}, 0 0 24px ${theme.palette.glow.red}`,
  },
});
