import { checkingCredentials } from "../../slices";

export const startCheckingAuth = () => {
  return async (dispatch: any) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch: any) => {
    dispatch(checkingCredentials());
  };
};
