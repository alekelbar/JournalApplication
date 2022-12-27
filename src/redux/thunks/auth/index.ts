import {
  checkingCredentials,
  login,
  loginWithEmailAndPassword,
  logout,
} from "../../slices";
import { signInWithGoogle } from "../../../firebase/Providers/google.provider";
import { MakeUserWithEmailAndPassword } from "../../../firebase/Providers/emailPass.provider";
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
      return;
    }

    // Everything was OK...
    if (!authData.user) {
      dispatch(logout(authData.error || ""));
      return;
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
      return;
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
  };
};
