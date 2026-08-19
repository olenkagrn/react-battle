import { Box, Typography } from '@mui/material';
import reactBattleLogo from '@/assets/ReactBattleLogo.png';
import type { AuthFormProps } from './types';
import { card, logo, subtitle, title } from './styles';

export const AuthForm = ({ title: heading, subtitle: description, children }: AuthFormProps) => (
  <Box sx={card}>
    <Box component="img" src={reactBattleLogo} alt="React Battle" sx={logo} />
    <Typography component="h1" sx={title}>
      {heading}
    </Typography>
    <Typography sx={subtitle}>{description}</Typography>
    {children}
  </Box>
);
