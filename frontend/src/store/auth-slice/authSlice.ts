import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { authApi } from '@/api/services/authentication/authApi';
import type { ApiErrorResponse } from '@/api/services/authentication/types';
import type { AuthState } from './types';

const getErrorMessage = (payload: unknown) =>
  (payload as { data?: ApiErrorResponse } | undefined)?.data?.error?.message ??
  'An unexpected network error occurred.';

const initialState: AuthState = {
  user: null,
  accessToken: localStorage.getItem('accessToken') || null,
  refreshToken: localStorage.getItem('refreshToken') || null,
  status: 'idle',
  error: null,
  successMessage: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearSuccessMessage: (state) => {
      state.successMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(authApi.endpoints.login.matchPending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addMatcher(authApi.endpoints.register.matchPending, (state) => {
        state.status = 'loading';
        state.error = null;
        state.successMessage = null;
      })

      .addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
        state.status = 'succeeded';
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.error = null;
      })

      .addMatcher(authApi.endpoints.register.matchFulfilled, (state) => {
        state.status = 'succeeded';
        state.error = null;
        state.successMessage = 'Account created successfully.';
      })

      .addMatcher(
        authApi.endpoints.login.matchRejected,
        (state, action: PayloadAction<unknown>) => {
          state.status = 'failed';
          state.error = getErrorMessage(action.payload);
          state.successMessage = null;
        },
      )

      .addMatcher(
        authApi.endpoints.register.matchRejected,
        (state, action: PayloadAction<unknown>) => {
          state.status = 'failed';
          state.error = getErrorMessage(action.payload);
          state.successMessage = null;
        },
      );
  },
});

export const { clearError, clearSuccessMessage } = authSlice.actions;
export default authSlice.reducer;
