// Єдиний клас помилок для всього застосунку.
// controller/service кидають AppError, main.ts перетворює його на JSON-відповідь.
export class AppError extends Error {
  constructor(
    public statusCode: number,
    public code: string,
    message: string,
  ) {
    super(message);
    this.name = 'AppError';
  }
}
