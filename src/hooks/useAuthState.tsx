import React from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { fireBaseAuth } from '../firebase/index.firebase';
import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks.redux';
import { login, logout } from '../redux';
import { loadNotes } from '../helpers';
import { startSetNotes } from '../redux/thunks/journal/index';

export const useAuthState = () => {

  const { status } = useAppSelector(state => state.auth);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    onAuthStateChanged(fireBaseAuth, async (user) => {
      if (!user) return dispatch(logout(null));

      const { displayName, email, photoURL, uid } = user;
      dispatch(login({ displayName, email, photoURL, uid, errorMessage: null, status: 'autenticated' }));
      dispatch(startSetNotes());
    });
  }, []);

  return { status };
};
