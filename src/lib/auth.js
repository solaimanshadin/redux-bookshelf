import React, { useState, useEffect, useContext, createContext } from "react";
import { Route } from "react-router";
import Login from "../pages/Login";
import firebase from "./firebase";
import Preloader from '../components/Preloader'
const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

export const PrivateRoute = ({
  component: Component,
  handleChildFunc,
  ...rest
}) => {
  const { user, loginStatus } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) =>
        loginStatus.status === "pending" ? (
          <Preloader />
        ) : user ? (
          <Component {...props} />
        ) : (
          <Login />
        )
      }
    />
  );
};

function useProvideAuth() {
  const [user, setUser] = useState();
  const [loginStatus, setLoginStatus] = useState({
    status: "idle",
    error: null,
  });

  const formatUser = (user) => ({
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
    uid: user.uid,
  });

  const signInWithGoogle = () => {
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((response) => {
        const formattedUser = formatUser(response.user);
        setUser(formattedUser);
        setLoginStatus({ status: "resolved", error: null });
        return formattedUser;
      })
      .catch((err) => {
        setUser(null);
        setLoginStatus({ status: "resolved", error: err.message });
      });
  };

  const signOut = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
        setLoginStatus({ status: "idle", error: null });
      });
  };

  useEffect(() => {
    setLoginStatus({ status: "pending", error: null });
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const formattedUser = formatUser(user);
        setUser(formattedUser);
        setLoginStatus({ status: "resolved", error: null });
      } else {
        setLoginStatus({ status: "idle", error: null });
        setUser(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    user,
    loginStatus,
    signInWithGoogle,
    signOut,
  };
}
