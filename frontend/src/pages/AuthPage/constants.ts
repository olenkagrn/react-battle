import type { AuthMode } from './types';

export const AUTH_MODES = {
  LOGIN: 'login',
  SIGNUP: 'signup',
} as const;

export const DEFAULT_AUTH_MODE: AuthMode = 'signup';

export const AUTH_CONTENT = {
  login: {
    title: 'Welcome Back',
    subtitle: 'Log in to enter the arena and continue your battles.',
    prompt: "Don't have an account?",
    action: 'Sign up',
  },
  signup: {
    title: 'Create Account',
    subtitle: 'Join the arena. Challenge developers. Prove your skills.',
    prompt: 'Already have an account?',
    action: 'Log in',
  },
} as const;
