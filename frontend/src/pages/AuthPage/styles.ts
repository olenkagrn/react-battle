import type { SxProps, Theme } from '@mui/material';
import reactBattleBg from '@/assets/ReactBattleBg.png';
import { fontSizes, fontWeights } from '@/shared/theme';

export const page: SxProps<Theme> = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  px: 2,
  py: 4,
  bgcolor: 'background.default',
  backgroundImage: `url(${reactBattleBg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};

export const form: SxProps<Theme> = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 2.25,
  textAlign: 'left',
};

export const divider: SxProps<Theme> = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: 1.5,
  mt: 3,
  mb: 2.5,
};

export const dividerLine: SxProps<Theme> = {
  flex: 1,
  height: 1,
  bgcolor: 'divider',
};

export const dividerText: SxProps<Theme> = {
  color: 'text.secondary',
  fontSize: fontSizes.s,
  fontWeight: fontWeights.semiBold,
  letterSpacing: '0.1em',
};

export const footer: SxProps<Theme> = {
  m: 0,
  color: 'text.secondary',
  fontSize: fontSizes.l,
};

export const footerLink: SxProps<Theme> = {
  color: 'cyan.main',
  fontWeight: fontWeights.semiBold,
  cursor: 'pointer',
  border: 'none',
  background: 'none',
  font: 'inherit',
  padding: 0,
};
