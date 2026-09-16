import { z } from 'zod';
import { loginSchema } from './LoginForm/login.schema';
import { signUpSchema } from './SignUpForm/signUp.schema';

export type AuthMode = 'login' | 'signup';
export type SignUpFormData = z.infer<typeof signUpSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;
