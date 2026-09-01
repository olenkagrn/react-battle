import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import { env } from '../../config/env.js';
import { AppError } from '../../common/errors.js';
import * as authRepo from './auth.repository.js';
import type { RegisterInput, LoginInput } from './auth.schema.js';

function issueTokens(userId: string, username: string) {
  const accessOptions: jwt.SignOptions = { expiresIn: env.JWT_ACCESS_TTL as jwt.SignOptions['expiresIn'] };
  const refreshOptions: jwt.SignOptions = { expiresIn: env.JWT_REFRESH_TTL as jwt.SignOptions['expiresIn'] };

  const accessToken = jwt.sign({ sub: userId, username }, env.JWT_ACCESS_SECRET, accessOptions);
  const refreshToken = jwt.sign({ sub: userId, username }, env.JWT_REFRESH_SECRET, refreshOptions);
  return { accessToken, refreshToken };
}

export async function registerUser(input: RegisterInput) {
  const existing = await authRepo.findUserByUsernameOrEmail(input.username, input.email);
  if (existing) {
    throw new AppError(409, 'USER_EXISTS', 'Username or email already taken');
  }
  const passwordHash = await argon2.hash(input.password);
  return authRepo.createUser({ username: input.username, email: input.email, passwordHash });
}

export async function loginUser(input: LoginInput) {
  const user = await authRepo.findUserByUsername(input.username);
  if (!user) throw new AppError(401, 'INVALID_CREDENTIALS', 'Invalid username or password');

  const valid = await argon2.verify(user.passwordHash, input.password);
  if (!valid) throw new AppError(401, 'INVALID_CREDENTIALS', 'Invalid username or password');

  return issueTokens(user.id, user.username);
}

export function refreshTokens(refreshToken: string) {
  try {
    const payload = jwt.verify(refreshToken, env.JWT_REFRESH_SECRET) as {
      sub: string;
      username: string;
    };
    return issueTokens(payload.sub, payload.username);
  } catch {
    throw new AppError(401, 'INVALID_REFRESH_TOKEN', 'Refresh token invalid or expired');
  }
}
