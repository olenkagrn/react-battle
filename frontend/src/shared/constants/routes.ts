export const ROUTES = {
  HOME: '/',
  AUTH: '/auth',
  ROOM: '/room/:id',
} as const;

export const roomRoute = (id: string) => `/room/${encodeURIComponent(id)}`;
