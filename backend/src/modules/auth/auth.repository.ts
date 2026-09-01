import { prisma } from '../../infrastructure/prisma/client.js';

export function findUserByUsernameOrEmail(username: string, email: string) {
  return prisma.user.findFirst({ where: { OR: [{ username }, { email }] } });
}

export function findUserByUsername(username: string) {
  return prisma.user.findUnique({ where: { username } });
}

export function createUser(data: { username: string; email: string; passwordHash: string }) {
  return prisma.user.create({ data });
}
