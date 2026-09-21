# React Battle - frontend

Frontend частина multiplayer-гри React Battle, створена на React, TypeScript і Vite.

## Передумови

- Node.js 20 або новіший
- npm
- Доступний API за адресою `http://localhost:4000`

Налаштування backend описано окремо в [backend/README.md](../backend/README.md).

## Локальне налаштування

Із кореня репозиторію виконайте:

```bash
cd frontend
npm install
```

Створіть файл `frontend/.env` у корені frontend-проєкту:

```env
VITE_API_BASE_URL=http://localhost:4000/
```

## Запуск застосунку

```bash
cd frontend
npm run start
```

Frontend за замовчуванням доступний за адресою `http://localhost:5173`.
Перед реєстрацією або входом API має бути запущений окремо.

## Перевірка налаштування

Відкрийте `http://localhost:5173/auth` і перевірте такий frontend flow:

1. Створіть акаунт з унікальними username та email.
2. Після успішної реєстрації застосунок перенаправить на login-форму і покаже success toast.
3. Увійдіть за username і password, які використовувалися під час реєстрації.
4. Після успішного входу застосунок перенаправить на `/`.

## Доступні scripts

Виконуйте ці команди з директорії `frontend`:

| Команда                | Опис                                         |
| ---------------------- | -------------------------------------------- |
| `npm run start`        | Запустити Vite development server з HMR      |
| `npm run build`        | Перевірити типи та створити production build |
| `npm run preview`      | Локально переглянути production build        |
| `npm run lint`         | Запустити ESLint                             |
| `npm run format`       | Форматувати frontend-файли через Prettier    |
| `npm run format:check` | Перевірити форматування без змін файлів      |
| `npm run test:run`     | Один раз запустити набір тестів              |
| `npm run check`        | Перевірити форматування, lint і build        |

Перед створенням pull request виконайте:

```bash
npm run check
```

## Auth flow

Frontend використовує RTK Query для HTTP-запитів і Redux для auth state.

### Реєстрація

`POST /auth/register`

```json
{
  "username": "neo",
  "email": "neo@example.com",
  "password": "matrix123"
}
```

Поле `confirmPassword` використовується лише для frontend-валідації і не надсилається на backend.

### Вхід

`POST /auth/login`

```json
{
  "username": "neo",
  "password": "matrix123"
}
```

Backend повертає `accessToken` і `refreshToken`. Frontend зберігає їх у `localStorage` і надсилає access token так:

```text
Authorization: Bearer <accessToken>
```

Помилки backend показуються через глобальний error toast. Помилки клієнтської валідації показуються біля відповідних полів.

## Поточні routes

| Route              | Опис                                     |
| ------------------ | ---------------------------------------- |
| `/auth`            | Auth page, за замовчуванням sign-up mode |
| `/auth?mode=login` | Auth page у login mode                   |
| `/`                | Home page після успішного входу          |

## Структура frontend

- `src/main.tsx` - точка входу React, налаштування router і Redux Provider
- `src/App.tsx` - theme, routes і глобальні success/error toasts
- `src/api/services/authentication` - auth API-запити та DTO
- `src/pages/AuthPage` - сторінки login і registration
- `src/routes` - application routes
- `src/store` - Redux store, auth state і типізовані selectors
- `src/shared/components` - повторно використовувані form та UI components
- `src/shared/theme` - налаштування Material UI theme
