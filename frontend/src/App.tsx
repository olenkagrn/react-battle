import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '@/shared/theme';
import { AppRoutes } from './routes/AppRoutes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
