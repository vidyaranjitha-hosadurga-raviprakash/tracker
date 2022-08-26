// Routes START
export const routesPath = {
  SIGNIN_PAGE: "/signin",
  SIGNUP_PAGE: "/signup",
  HOME_PAGE: "/home",
  PROFILE_PAGE: "/profile",
  PAGE_NOT_FOUND: "/pagenotfound",
};
// Routes START

// Dark mode START
export const DARK_MODE = "dark";
export const LIGHT_MODE = "light";
// Dark mode END

// Firebase cconfig START
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Firebase cconfig END

export const tableNames = {
  USERS: "users",
};

export const PROGRESS_LABEL_NAME = {
  FETCH: "Fetching",
  CREATE: "Saving",
  DELETE: "Deleting",
};
