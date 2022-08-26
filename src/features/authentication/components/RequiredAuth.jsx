import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { routesPath } from "data/Constants";
import { useAuth } from "features/authentication/context";

export const RequiredAuth = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  if (isLoggedIn) {
    return <Outlet />;
  }

  return (
    <Navigate to={routesPath.SIGNIN_PAGE} state={{ from: location }} replace />
  );
};
