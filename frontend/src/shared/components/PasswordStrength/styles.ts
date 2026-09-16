import type { SxProps, Theme } from '@mui/material';
import { fontSizes, fontWeights } from '@/shared/theme';

export const root: SxProps<Theme> = {
  width: '100%',
};

export const bars: SxProps<Theme> = {
  display: 'flex',
  gap: 1,
  mb: 1,
};

export const bar = (isActive: boolean, color: string): SxProps<Theme> => ({
  flex: 1,
  height: 4,
  borderRadius: 999,
  backgroundColor: isActive ? color : 'strength.track',
});

export const meta: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export const label: SxProps<Theme> = {
  fontSize: fontSizes.s,
  color: 'text.secondary',
};

export const value = (hasLevel: boolean, color: string): SxProps<Theme> => ({
  fontSize: fontSizes.s,
  fontWeight: fontWeights.semiBold,
  color: hasLevel ? color : 'text.secondary',
});
