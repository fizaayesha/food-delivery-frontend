import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export default function AuthRoute({ children }) {
  const location = useLocation();
  const { user } = useAuth();
  return user ? (
    children
  ) : (
    <Navigate to={`https://food-delivery-web-app-sand.vercel.app/login?returnUrl=${location.pathname}`} replace />
  );
}
