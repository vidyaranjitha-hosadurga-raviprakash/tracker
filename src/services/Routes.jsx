import { SignIn, SignUp, Home, PageNotFound, App } from "pages";
import { RequiredAuth } from "features/authentication/components";
import { UserProfile } from "features/sideBar";
import { routesPath } from "data/Constants";
import { useRoutes, useNavigate } from "react-router-dom";
import { useAuth } from "features/authentication/context";
import React, { useRef, useEffect } from "react";

const routes = [
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: routesPath.SIGNIN_PAGE,
    element: <SignIn />,
  },
  {
    path: routesPath.SIGNUP_PAGE,
    element: <SignUp />,
  },
  {
    element: <RequiredAuth />,
    children: [
      {
        element: <App />,
        children: [
          {
            path: routesPath.HOME_PAGE,
            element: <Home />,
          },
          {
            path: routesPath.PROFILE_PAGE,
            element: <UserProfile />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];
export const Routes = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const appRendered = useRef(false);

  useEffect(() => {
    if (isLoggedIn && !appRendered.current) {
      appRendered.current = true;
      navigate(routesPath.HOME_PAGE);
    }
  }, [isLoggedIn, navigate]);

  return useRoutes(routes);
};
