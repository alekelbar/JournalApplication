import {
  checkingCredentials,
  login,
  loginWithEmailAndPassword,
  logout,
} from "../../slices";
import { signInWithGoogle } from "../../../firebase/Providers/google.provider";
import { loginWithEmailAndPass, MakeUserWithEmailAndPassword, logoutFirebase } from '../../../firebase/Providers/emailPass.provider';
import { ThunkAction } from "@reduxjs/toolkit";

export const startCheckingAuth = () => {
  return async (dispatch: any) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch: any) => {
    dispatch(checkingCredentials());
    const authData = await signInWithGoogle();

    // Something was wrong...
    if (!authData.OK) {
      dispatch(logout(authData.error || ""));
      return false;
    }

    // Everything was OK...
    if (!authData.user) {
      dispatch(logout(authData.error || ""));
      return false;
    }

    const { displayName, email, photoURL, uid } = authData.user;
    dispatch(
      login({
        displayName,
        email,
        photoURL,
        uid,
        status: "autenticated",
        errorMessage: null,
      })
    );
    return true;
  };
};

export const startMakeUserWithEmailAndPassword = (
  email: string,
  password: string,
  displayName: string
) => {
  return async (dispatch: any) => {
    dispatch(checkingCredentials());
    const registerInfo = await MakeUserWithEmailAndPassword(
      email,
      password,
      displayName
    );

    if (!registerInfo.user) {
      dispatch(logout(registerInfo.error as string));
      return false;
    }

    const {
      user: { uid, photoURL },
    } = registerInfo;

    // make new state using the created user
    dispatch(
      loginWithEmailAndPassword({
        status: "autenticated",
        errorMessage: null,
        email,
        displayName,
        photoURL,
        uid,
      })
    );
    return true;
  };
};

export const startLoginWithEmailAndPassword = (email: string, password: string) => {
  return async (dispatch: any) => {
    const authData = await loginWithEmailAndPass(email, password);

    // if something was wrong
    if (!authData.OK) {
      dispatch(logout(authData.error));
      return false;
    }

    // Everything was OK?...
    if (!authData.user) {
      dispatch(logout(authData.error));
      return false;
    }

    const { displayName, email: userEmail, photoURL, uid } = authData.user;

    dispatch(login({
      displayName, photoURL, uid, email: userEmail, status: 'autenticated', errorMessage: null
    }))
    // everything was OK
    return true;
  }
}


export const startLogoutFirebase = () => {
  return async (dispatch: any) => {
    await logoutFirebase();
    dispatch(logout(null));
  }
}