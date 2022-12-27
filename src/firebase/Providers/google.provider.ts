import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { fireBaseAuth } from "../index.firebase";
import { AuthProviderStatus } from "../interfaces";

const googleProvider = new GoogleAuthProvider();

// Popup to access with google
export const signInWithGoogle = async () => {
  // interface to describe the auth status...
  const authProviderStatus: AuthProviderStatus = {
    OK: false,
    error: null,
  };

  try {
    const { user } = await signInWithPopup(fireBaseAuth, googleProvider);
    const { displayName, email, photoURL, uid } = user;
    // Everything was OK...
    authProviderStatus.OK = true;

    authProviderStatus.user = {
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error: any) {
    authProviderStatus.error = error.message;
  }
  return authProviderStatus;
};
