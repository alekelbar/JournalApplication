export interface AuthUserInterface {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  uid: string | null;
}

export interface AuthProviderStatus {
  OK: boolean;
  user?: AuthUserInterface;
  error?: string | null;
}
