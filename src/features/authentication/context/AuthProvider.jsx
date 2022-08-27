import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";

import { toast } from "react-toastify";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { auth } from "config/FirebaseConfig";
import { Loader } from "components";
import { tableNames } from "data/Constants";
import { fetchFromDB, writeToDB } from "lib/DBOperations";

const AuthContext = createContext();
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      var userDetails = null;

      (async () => {
        setIsLoading(true);
        if (user?.uid) {
          userDetails = await fetchFromDB(`${tableNames.USERS}/${user?.uid}`);
        }
        setCurrentUser(userDetails);
        setIsLoading(false);
      })();
    });
    return () => unsubscribe;
  }, []);

  const signup = async (user) => {
    try {
      return await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      )
        .then((result) => {
          const userDetails = {
            uid: result.user.uid,
            name: user.name,
            email: result.user.email,
            photoURL: "",
          };
          writeToDB(`${tableNames.USERS}/${result.user.uid}`, userDetails);
          toast.success("Signed Up Successfully!");
        })
        .catch((error) => {
          console.error("Failed to signup user, ", error);
          toast.error("Failed to Sign up");
        });
    } catch (error) {
      toast.error("Failed to Sign up");
    }
  };

  const signin = async ({ email, password }) => {
    try {
      return await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          toast.success("Logged In Successfully!");
        })
        .catch((error) => {
          console.error("Failed to authenticate email and password, ", error);
          toast.error("Failed to Sign In");
        });
    } catch (error) {
      toast.error("Failed to Sign In");
    }
  };

  const signout = async () => {
    try {
      localStorage.removeItem("token");
      return await signOut(auth)
        .then(() => toast.success("Logged Out Successfully!"))
        .catch((error) => {
          console.error("Failed to signout user, ", error);
          toast.error("Failed to Sign Out");
        });
    } catch (error) {
      toast.error("Failed to Sign Out");
    }
  };
  const signinWithGoogle = () => {
    try {
      signInWithPopup(auth, provider)
        .then(async (result) => {
          const { uid, displayName, email, photoURL } = result?.user;
          const isUserPresent = await fetchFromDB(`${tableNames.USERS}/${uid}`);

          // Add new user to the db
          if (!isUserPresent) {
            const userDetails = {
              uid,
              name: displayName,
              email,
              photoURL,
            };
            writeToDB(`${tableNames.USERS}/${uid}`, userDetails);
            setCurrentUser(userDetails);
          }
          // It returns a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          localStorage.setItem("token", token);
          toast.success("Logged In Successfully!");
        })
        .catch((error) => {
          console.error("Failed to authenticate with google, ", error);
          toast.error("Failed to authenticate");
        });
    } catch (error) {
      toast.error("Failed to authenticate");
    }
  };
  const isLoggedIn = useMemo(
    () => (currentUser?.email ? true : false),
    [currentUser]
  );
  const value = {
    currentUser,
    signup,
    signin,
    signout,
    signinWithGoogle,
    isLoggedIn,
  };

  return (
    <AuthContext.Provider value={value}>
      {isLoading ? <Loader /> : children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
