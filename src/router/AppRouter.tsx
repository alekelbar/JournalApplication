import { Navigate, Route, Routes } from "react-router-dom";
import { StatusChecking } from '../common/ui/StatusChecking';
import { JournalRoutes } from "./JornalApp";
import { AuthRoutes } from './auth/index';
import { useAuthState } from '../hooks/useAuthState';

export const AppRouter = () => {

  const { status } = useAuthState();

  if (status === 'cheking') return <StatusChecking />

  return (
    <Routes>
      {
        status === 'autenticated' ?
          (
            <Route path="/*" element={<JournalRoutes />} />
          ) :
          (
            <Route path="/auth/*" element={<AuthRoutes />} />
          )
      }
      <Route path="/*" element={<Navigate to={'/auth/login'}/>} />
    </Routes>
  );
};
