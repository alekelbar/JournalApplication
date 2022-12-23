type AuthStatus = "cheking" | "autenticated" | "not-autenticated";

export type Auth = {
  status: AuthStatus;
  uid: null | string;
  email: null | string;
  displayName: null | string;
  photoURL: null | string;
  errorMessage: null | string;
};
