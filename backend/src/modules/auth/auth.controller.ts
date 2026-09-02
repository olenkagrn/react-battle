import type { Router } from '../../common/http/router.js';
import { readJsonBody, sendJson } from '../../common/http/respond.js';
import { registerSchema, loginSchema, refreshSchema } from './auth.schema.js';
import * as authService from './auth.service.js';

export function registerAuthRoutes(router: Router) {
  router.post('/auth/register', async (req, res) => {
    const body = await readJsonBody(req);
    const input = registerSchema.parse(body); // кине ZodError -> 400 в глобальному error-handler'і
    const user = await authService.registerUser(input);
    sendJson(res, 201, { id: user.id, username: user.username, email: user.email });
  });

  router.post('/auth/login', async (req, res) => {
    const body = await readJsonBody(req);
    const input = loginSchema.parse(body);
    const tokens = await authService.loginUser(input);
    sendJson(res, 200, tokens);
  });

  router.post('/auth/refresh', async (req, res) => {
    const body = await readJsonBody(req);
    const { refreshToken } = refreshSchema.parse(body);
    const tokens = authService.refreshTokens(refreshToken);
    sendJson(res, 200, tokens);
  });
}
