import { useState } from 'react';
import { Box, Link as MuiLink, Typography } from '@mui/material';
import { AuthForm } from '@/shared/components';
import { AUTH_CONTENT, AUTH_MODES, DEFAULT_AUTH_MODE } from './constants';
import { divider, dividerLine, dividerText, footer, footerLink, page } from './styles';
import { SignUpForm } from './SignUpForm/SignUpForm';
import { LoginForm } from './LoginForm/LoginForm';

const AuthPage = () => {
  const [mode, setMode] = useState(DEFAULT_AUTH_MODE);
  const content = AUTH_CONTENT[mode];

  const handleModeChange = () => {
    setMode(mode === AUTH_MODES.LOGIN ? AUTH_MODES.SIGNUP : AUTH_MODES.LOGIN);
  };

  return (
    <Box sx={page}>
      <AuthForm title={content.title} subtitle={content.subtitle}>
        {mode === AUTH_MODES.SIGNUP ? <SignUpForm /> : <LoginForm />}

        <Box sx={divider}>
          <Box sx={dividerLine} />
          <Typography sx={dividerText}>OR</Typography>
          <Box sx={dividerLine} />
        </Box>

        <Typography sx={footer}>
          {content.prompt}{' '}
          <MuiLink
            component="button"
            type="button"
            underline="hover"
            sx={footerLink}
            onClick={handleModeChange}
          >
            {content.action}
          </MuiLink>
        </Typography>
      </AuthForm>
    </Box>
  );
};

export default AuthPage;
