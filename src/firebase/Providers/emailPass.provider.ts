import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  User,
} from "firebase/auth";
import { fireBaseAuth } from "../index.firebase";
import { AuthProviderStatus } from '../interfaces/index';

export const MakeUserWithEmailAndPassword = async (
  email: string,
  password: string,
  displayName: string
) => {
  const authProviderStatus: AuthProviderStatus = {
    OK: false,
    error: null,
  };
  try {
    const { user } = await createUserWithEmailAndPassword(
      fireBaseAuth,
      email,
      password
    );

    // update profile to add the correct displayname
    updateProfile(fireBaseAuth.currentUser as User, { displayName });

    // Prepare auth Status
    authProviderStatus.OK = true;
    authProviderStatus.user = user;
    return authProviderStatus;
  } catch (error: any) {
    authProviderStatus.error = error.message;
    return authProviderStatus;
  }
};

export const loginWithEmailAndPass = async (email: string, password: string) => {
  const authStatus: AuthProviderStatus = {
    OK: false,
    error: null,
  };

  try {
    const loginResult = await signInWithEmailAndPassword(fireBaseAuth, email, password);
    authStatus.user = loginResult.user;
    authStatus.OK = true;

  } catch (error: any) {
    authStatus.error = error.message;
  }
  return authStatus;
}


export const logoutFirebase = async () => {
  return await fireBaseAuth.signOut();
}