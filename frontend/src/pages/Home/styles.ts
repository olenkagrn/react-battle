import type { SxProps, Theme } from '@mui/material';
import reactBattleBg from '@/assets/ReactBattleBg.png';
import { fontSizes, fontWeights } from '@/shared/theme';

export const page: SxProps<Theme> = (theme) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  px: { xs: 2, sm: 4 },
  py: 5,
  backgroundColor: 'background.default',
  backgroundImage: `linear-gradient(120deg, ${theme.palette.background.default}F5, ${theme.palette.background.default}AD), url(${reactBattleBg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

export const content: SxProps<Theme> = {
  width: '100%',
  maxWidth: 1080,
  display: 'grid',
  gridTemplateColumns: { xs: '1fr', md: '0.85fr 1.15fr' },
  gap: { xs: 3, md: 7 },
  alignItems: 'center',
};

export const intro: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
};

export const eyebrow: SxProps<Theme> = {
  color: 'cyan.main',
  fontSize: fontSizes.s,
  fontWeight: fontWeights.bold,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
};

export const title: SxProps<Theme> = {
  fontSize: { xs: fontSizes.xl6, sm: fontSizes.xl7 },
  fontWeight: fontWeights.extraBold,
  lineHeight: 1.05,
  textTransform: 'uppercase',
};

export const subtitle: SxProps<Theme> = {
  maxWidth: 430,
  color: 'text.secondary',
  fontSize: fontSizes.xl2,
  lineHeight: 1.55,
};

export const panel: SxProps<Theme> = (theme) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 3,
  p: { xs: 2.5, sm: 4 },
  border: '1px solid',
  borderColor: 'input.border',
  borderRadius: 2,
  backgroundColor: 'background.paper',
  boxShadow: `0 24px 70px ${theme.palette.shadow}`,
  backdropFilter: 'blur(12px)',
});

export const panelHeading: SxProps<Theme> = {
  fontSize: fontSizes.xl4,
  fontWeight: fontWeights.bold,
};

export const joinForm: SxProps<Theme> = {
  display: 'flex',
  flexDirection: { xs: 'column', sm: 'row' },
  gap: 1.5,
  alignItems: { xs: 'stretch', sm: 'flex-end' },
  '& > button': {
    minWidth: { sm: 156 },
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
};

export const joinInput: SxProps<Theme> = {
  flex: 1,
  '& input': {
    textTransform: 'uppercase',
    letterSpacing: '0.18em',
    fontWeight: fontWeights.bold,
  },
};

export const sectionLabel: SxProps<Theme> = {
  color: 'text.secondary',
  fontSize: fontSizes.m,
};

export const error: SxProps<Theme> = {
  mt: -1.5,
  color: 'error.main',
  fontSize: fontSizes.m,
};
