import type { SxProps, Theme } from '@mui/material';
import { fontSizes, fontWeights } from '@/shared/theme';

export const formInput: SxProps<Theme> = {
  '& .MuiInputLabel-root': {
    position: 'static',
    transform: 'none',
    marginBottom: 1,
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.semiBold,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'text.disabled',
    '&.Mui-focused': { color: 'text.disabled' },
    '&.Mui-error': { color: 'error.main' },
  },
  '& .MuiOutlinedInput-root': {
    bgcolor: 'input.bg',
    borderRadius: '10px',
    color: 'text.primary',
    fontSize: fontSizes.xl,
    '& fieldset': {
      borderColor: 'input.border',
    },
    '&:hover fieldset': {
      borderColor: 'input.borderHover',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'primary.main',
      borderWidth: 1,
    },
    '&.Mui-error fieldset': {
      borderColor: 'error.main',
    },
  },
  '& .MuiOutlinedInput-input': {
    padding: '14px 16px',
    '&::placeholder': {
      color: 'text.secondary',
      opacity: 1,
    },
  },
  '& .MuiFormHelperText-root': {
    marginLeft: 0,
    marginTop: 0.75,
    fontSize: fontSizes.s,
  },
};
