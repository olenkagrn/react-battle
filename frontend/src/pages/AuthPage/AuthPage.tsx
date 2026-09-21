import { Box, Link as MuiLink, Typography } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { AuthForm } from '@/shared/components';
import { AUTH_CONTENT, AUTH_MODES, DEFAULT_AUTH_MODE } from './constants';
import { divider, dividerLine, dividerText, footer, footerLink, page } from './styles';
import { SignUpForm } from './SignUpForm/SignUpForm';
import { LoginForm } from './LoginForm/LoginForm';

const AuthPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedMode = searchParams.get('mode');
  const mode = requestedMode === AUTH_MODES.LOGIN ? AUTH_MODES.LOGIN : DEFAULT_AUTH_MODE;

  const content = AUTH_CONTENT[mode];

  const handleModeChange = () => {
    const nextMode = mode === AUTH_MODES.LOGIN ? AUTH_MODES.SIGNUP : AUTH_MODES.LOGIN;
    setSearchParams({ mode: nextMode });
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
