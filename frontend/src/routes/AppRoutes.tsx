import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES } from '@/shared/constants';
import { AuthPage } from '@/pages/AuthPage';
import { HomePage } from '@/pages/Home';
import { RoomPage } from '@/pages/Room';

export const AppRoutes = () => (
  <Routes>
    <Route path={ROUTES.AUTH} element={<AuthPage />} />
    <Route path={ROUTES.HOME} element={<HomePage />} />
    <Route path={ROUTES.ROOM} element={<RoomPage />} />
    <Route path="*" element={<Navigate to={ROUTES.AUTH} replace />} />
  </Routes>
);
