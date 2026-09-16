import { Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, FormInput } from '@/shared/components';
import type { LoginFormData } from '../types';
import { loginSchema } from './login.schema';
import { form } from '../styles';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={form}>
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
