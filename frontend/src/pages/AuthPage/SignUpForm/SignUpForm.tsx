import { Box } from '@mui/material';
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, FormInput, PasswordStrength } from '@/shared/components';
import { signUpSchema } from './signUp.schema';
import type { SignUpFormData } from '../types';
import { form } from '../styles';

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const password = useWatch({ control, name: 'password' }) ?? '';

  const onSubmit = (data: SignUpFormData) => {
    console.log(data);
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
      <Button type="submit" fullWidth>
        Create Account
      </Button>
    </Box>
  );
};
