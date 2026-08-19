import type { SxProps, Theme } from '@mui/material';
import { fontSizes, fontWeights, lineHeights } from '@/shared/theme';

export const card: SxProps<Theme> = (theme) => ({
  width: '100%',
  maxWidth: 550,
  px: { xs: 3, sm: 4.5 },
  py: { xs: 4, sm: 5 },
  borderRadius: '24px',
  bgcolor: 'background.paper',
  backdropFilter: 'blur(16px)',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  boxShadow: `0 24px 80px ${theme.palette.shadow}`,
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    borderRadius: 'inherit',
    padding: '1px',
    background: theme.gradients.cardBorder,
    WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
    pointerEvents: 'none',
  },
});

export const logo: SxProps<Theme> = {
  width: 180,
  height: 'auto',
  mb: 2.5,
};

export const title: SxProps<Theme> = {
  m: 0,
  mb: 1,
  color: 'text.primary',
  fontSize: { xs: fontSizes.xl5, sm: fontSizes.xl6 },
  fontWeight: fontWeights.extraBold,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  lineHeight: lineHeights.default,
};

export const subtitle: SxProps<Theme> = {
  m: 0,
  mb: 3.5,
  color: 'text.secondary',
  fontSize: fontSizes.l,
  lineHeight: lineHeights.xl2,
  maxWidth: 320,
};
