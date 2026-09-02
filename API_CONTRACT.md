# React Battle — API Contract

Контракт між `backend` і `frontend`. При будь-якій зміні ендпоінту або WS-події —
оновлювати цей файл у тому ж PR, що й код.

## Запуск і базова адреса

- Локально: `http://localhost:4000` (порт з `.env`, за замовчуванням `4000`)
- Як підняти бекенд — дивись `backend/README.md` (`docker compose up -d` для Postgres, `npm install`, `npm run prisma:migrate`, `npm run dev`)
- CORS дозволений з будь-якого origin у dev-режимі (`Access-Control-Allow-Origin: *`)

---

## Формат помилок (єдиний для всього API)

Будь-яка помилка повертається так:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid request body",
    "issues": [ /* тільки для VALIDATION_ERROR, деталі від Zod */ ]
  }
}
```

Коди, які зустрічаються зараз:

| HTTP статус | code | Коли |
|---|---|---|
| 400 | `VALIDATION_ERROR` | Тіло запиту не пройшло Zod-валідацію |
| 401 | `UNAUTHORIZED` | Відсутній/невалідний/протухлий access-токен |
| 401 | `INVALID_CREDENTIALS` | Невірний username/password при логіні |
| 401 | `INVALID_REFRESH_TOKEN` | Невалідний/протухлий refresh-токен |
| 404 | `NOT_FOUND` | Роут не існує |
| 409 | `USER_EXISTS` | Username або email вже зайняті |
| 500 | `INTERNAL` | Непередбачена помилка сервера |

---

## REST API — Авторизація (Готово)

### `POST /auth/register`

Запит:
```json
{
  "username": "neo",        // 3–24 символи
  "email": "neo@example.com",
  "password": "matrix123"   // мінімум 8 символів
}
```

Відповідь `201`:
```json
{ "id": "uuid", "username": "neo", "email": "neo@example.com" }
```

Можливі помилки: `409 USER_EXISTS`, `400 VALIDATION_ERROR`.

### `POST /auth/login`

Запит:
```json
{ "username": "neo", "password": "matrix123" }
```

Відповідь `200`:
```json
{ "accessToken": "eyJ...", "refreshToken": "eyJ..." }
```

- `accessToken` — TTL 5 хв (`JWT_ACCESS_TTL` в `.env`), передавати в заголовку `Authorization: Bearer <token>` для захищених запитів і в `socket.handshake.auth.token` для WebSocket
- `refreshToken` — TTL 1 день, зберігати окремо, використовувати лише для `/auth/refresh`

Можлива помилка: `401 INVALID_CREDENTIALS`.

### `POST /auth/refresh`

Запит:
```json
{ "refreshToken": "eyJ..." }
```

Відповідь `200`: нова пара `{ accessToken, refreshToken }` (той самий формат, що й `/login`).

Можлива помилка: `401 INVALID_REFRESH_TOKEN` — у цьому випадку користувача треба розлогінити й повернути на форму логіну.

### `GET /health`

Без авторизації. Відповідь `200`: `{ "status": "ok" }`. Корисно для перевірки, що бекенд взагалі піднявся.