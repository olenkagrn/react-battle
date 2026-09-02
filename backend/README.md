# React Battle — backend

Чистий Node.js + Prisma.

## Запуск

1. `cp .env.example .env` і заповнити значення (мінімум `DATABASE_URL`, обидва JWT-секрети)
2. Підняти Postgres локально
3. `npm install`
4. `npm run prisma:migrate` — створить таблиці за `prisma/schema.prisma`
5. `npm run dev` — стартує на `http://localhost:4000` з автоперезапуском (tsx watch)

## Перевірка, що все працює

```bash
curl http://localhost:4000/health
# {"status":"ok"}

curl -X POST http://localhost:4000/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"neo","email":"neo@example.com","password":"matrix123"}'

curl -X POST http://localhost:4000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"neo","password":"matrix123"}'
```

## Структура

- `src/main.ts` — точка входу: HTTP-сервер + роутер + socket.io
- `src/common/http/router.ts` — мінімальний роутер (без Fastify/Express)
- `src/config/env.ts` — валідація змінних середовища через Zod, fail-fast
- `src/modules/*` — по одному модулю на домен (auth зроблений повністю,
  rooms/game — стаби з TODO під наступні спринти, дивись backlog)
- `src/modules/rooms/rooms.state.ts` — in-memory список учасників кімнати
  (заміна Redis; дані губляться при рестарті процесу, це нормально для ephemeral даних)
- `src/websocket/socket-server.ts` — socket.io namespace `/game`, JWT-auth на handshake

## Наступні кроки (по backlog)

- Sprint 2: `modules/rooms` — REST-ендпоінти створення/приєднання + генерація коду
- Sprint 3: реальна логіка `rooms.gateway.ts` (зараз стаб), таймер автостарту
- Sprint 4-5: `modules/game` — вибірка питань, серверний дедлайн раунду, підрахунок очок
- Sprint 6: `modules/results` — персист фінальної статистики
