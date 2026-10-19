import { Alert, CssBaseline, Snackbar, ThemeProvider } from '@mui/material';
import { theme } from '@/shared/theme';
import { AppRoutes } from './routes/AppRoutes';
import { clearError, clearSuccessMessage } from './store/auth-slice';
import { useAppDispatch, useAppSelector } from './store/auth-slice/selectors';

function App() {
  const dispatch = useAppDispatch();
  const error = useAppSelector((state) => state.auth.error);
  const successMessage = useAppSelector((state) => state.auth.successMessage);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRoutes />
      <Snackbar
        open={Boolean(error)}
        autoHideDuration={5000}
        onClose={() => dispatch(clearError())}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={() => dispatch(clearError())} severity="error" variant="filled">
          {error}
        </Alert>
      </Snackbar>
      <Snackbar
        open={Boolean(successMessage)}
        autoHideDuration={5000}
        onClose={() => dispatch(clearSuccessMessage())}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={() => dispatch(clearSuccessMessage())} severity="success" variant="filled">
          {successMessage}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}

export default App;
