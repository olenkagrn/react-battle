import { Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { Button, FormInput } from '@/shared/components';
import { ROUTES } from '@/shared/constants';
import type { LoginFormData } from '../types';
import { loginSchema } from './login.schema';
import { form } from '../styles';
import { useLoginMutation } from '@/api/services/authentication/authApi';

export const LoginForm = () => {
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data).unwrap();
      navigate(ROUTES.HOME, { replace: true });
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={form}>
      <FormInput
        {...register('username')}
        type="text"
        label="Username"
        placeholder="Enter your username"
        error={!!errors.username}
        helperText={errors.username?.message}
      />
      <FormInput
        {...register('password')}
        type="password"
        label="Password"
        placeholder="Enter your password"
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <Button type="submit" fullWidth>
        Log In
      </Button>
    </Box>
  );
};
