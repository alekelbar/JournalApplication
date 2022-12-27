import {
  createUserWithEmailAndPassword,
  updateProfile,
  User,
} from "firebase/auth";
import { fireBaseAuth } from "../index.firebase";
import { AuthProviderStatus } from "../interfaces/index";

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
