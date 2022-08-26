import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { BrowserRouter as RoutesContainer } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import { AuthProvider } from "features/authentication/context";
import { DarkModeProvider } from "features/darkMode/context";
import { Routes } from "./services/Routes";

import { Provider } from "react-redux";
import { Loader } from "components";
import store from "services/reduxStore";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Suspense fallback={<Loader />}>
    <Provider store={store}>
      <ToastContainer
        autoClose={1000}
        pauseOnFocusLoss={false}
        hideProgressBar={true}
        newestOnTop={true}
        transition={Slide}
      />
      <DarkModeProvider>
        <AuthProvider>
          <RoutesContainer>
            <Routes></Routes>
          </RoutesContainer>
        </AuthProvider>
      </DarkModeProvider>
    </Provider>
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
