import { createServer } from 'node:http';
import { ZodError } from 'zod';
import { env } from './config/env.js';
import { Router } from './common/http/router.js';
import { sendJson } from './common/http/respond.js';
import { AppError } from './common/errors.js';
import { registerAuthRoutes } from './modules/auth/auth.controller.js';
import { createSocketServer } from './websocket/socket-server.js';

const router = new Router();

router.get('/health', (_req, res) => sendJson(res, 200, { status: 'ok' }));
registerAuthRoutes(router);
// TODO: registerRoomRoutes(router) — Sprint 2 (POST /rooms, POST /rooms/:code/join)
// TODO: registerResultsRoutes(router) — Sprint 6 (GET /rooms/:id/results)

const httpServer = createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // TODO: звузити до конкретного домену перед продом
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  try {
    const handled = await router.handle(req, res);
    if (!handled) {
      sendJson(res, 404, { error: { code: 'NOT_FOUND', message: 'Route not found' } });
    }
  } catch (err) {
    if (err instanceof AppError) {
      sendJson(res, err.statusCode, { error: { code: err.code, message: err.message } });
    } else if (err instanceof ZodError) {
      sendJson(res, 400, {
        error: { code: 'VALIDATION_ERROR', message: 'Invalid request body', issues: err.issues },
      });
    } else {
      console.error(err);
      sendJson(res, 500, { error: { code: 'INTERNAL', message: 'Internal server error' } });
    }
  }
});

createSocketServer(httpServer);

async function bootstrap() {
  httpServer.listen(env.PORT, () => {
    console.log(`Backend listening on http://localhost:${env.PORT}`);
  });
}

bootstrap();
