import { Box } from '@mui/material';
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { Button, FormInput, PasswordStrength } from '@/shared/components';
import { signUpSchema } from './signUp.schema';
import type { SignUpFormData } from '../types';
import { form } from '../styles';
import { useRegisterMutation } from '@/api/services/authentication/authApi';
import { useAppSelector } from '@/store/auth-slice/selectors';

export const SignUpForm = () => {
  const [registerUser] = useRegisterMutation();
  const navigate = useNavigate();

  const status = useAppSelector((state) => state.auth.status);
  const isLoading = status === 'loading';

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const password = useWatch({ control, name: 'password' }) ?? '';

  const onSubmit = async (data: SignUpFormData) => {
    const credentials = {
      username: data.username,
      email: data.email,
      password: data.password,
    };

    try {
      await registerUser(credentials).unwrap();
      navigate('/auth?mode=login', { replace: true });
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={form}>
      <FormInput
        {...register('username')}
        type="text"
        label="Username"
        placeholder="Choose your username"
        error={!!errors.username}
        helperText={errors.username?.message}
      />
      <FormInput
        {...register('email')}
        type="email"
        label="Email"
        placeholder="Enter your email"
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <FormInput
        {...register('password')}
        type="password"
        label="Password"
        placeholder="Create a strong password"
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <PasswordStrength password={password} />
      <FormInput
        {...register('confirmPassword')}
        type="password"
        label="Confirm Password"
        placeholder="Confirm your password"
        error={!!errors.confirmPassword}
        helperText={errors.confirmPassword?.message}
      />

      <Button type="submit" fullWidth disabled={isLoading}>
        {isLoading ? 'Creating account...' : 'Create Account'}
      </Button>
    </Box>
  );
};
