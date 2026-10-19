import type { SxProps, Theme } from '@mui/material';
import reactBattleBg from '@/assets/ReactBattleBg.png';
import { fontSizes, fontWeights } from '@/shared/theme';

export const page: SxProps<Theme> = (theme) => ({
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  px: 2,
  py: 5,
  backgroundColor: 'background.default',
  backgroundImage: `linear-gradient(120deg, ${theme.palette.background.default}F5, ${theme.palette.background.default}AD), url(${reactBattleBg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

export const content: SxProps<Theme> = {
  width: '100%',
  maxWidth: 560,
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
};

export const panel: SxProps<Theme> = (theme) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 2.5,
  p: { xs: 2.5, sm: 4 },
  border: '1px solid',
  borderColor: 'input.border',
  borderRadius: 2,
  backgroundColor: 'background.paper',
  boxShadow: `0 24px 70px ${theme.palette.shadow}`,
  backdropFilter: 'blur(12px)',
});

export const status: SxProps<Theme> = {
  color: 'cyan.main',
  fontSize: fontSizes.s,
  fontWeight: fontWeights.bold,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
};

export const title: SxProps<Theme> = {
  fontSize: { xs: fontSizes.xl5, sm: fontSizes.xl6 },
  fontWeight: fontWeights.extraBold,
  textTransform: 'uppercase',
};

export const roomCode: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 1,
  px: 2,
  py: 1.25,
  border: '1px solid',
  borderColor: 'input.border',
  borderRadius: 1,
  backgroundColor: 'input.bg',
  '& p': {
    color: 'cyan.main',
    fontSize: fontSizes.xl4,
    fontWeight: fontWeights.bold,
    letterSpacing: '0.2em',
  },
};
