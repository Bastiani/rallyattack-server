// @flow
import User from '../modules/user/UserLoader';

export const isLoggedIn = (context: Context) => {
  const { user } = context;

  if (user instanceof User) return true;

  return false;
};
