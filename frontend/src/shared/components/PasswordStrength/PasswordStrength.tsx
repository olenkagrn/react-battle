import { Box, Typography } from '@mui/material';
import { STRENGTH_LABEL, STRENGTH_META, STRENGTH_SEGMENTS } from './constants';
import { bar, bars, label, meta, root, value } from './styles';
import type { PasswordStrengthProps } from './types';
import { getStrength } from './utils';

export const PasswordStrength = ({ password }: PasswordStrengthProps) => {
  const level = getStrength(password);
  const { label: strengthLabel, color } = STRENGTH_META[level];

  return (
    <Box sx={root}>
      <Box sx={bars}>
        {Array.from({ length: STRENGTH_SEGMENTS }, (_, index) => (
          <Box key={index} sx={bar(index < level, color)} />
        ))}
      </Box>
      <Box sx={meta}>
        <Typography sx={label}>{STRENGTH_LABEL}</Typography>
        <Typography sx={value(Boolean(level), color)}>{strengthLabel}</Typography>
      </Box>
    </Box>
  );
};
