import { ServerResponse } from 'http';
import { useRouter } from 'next/router';

import { useUser } from '../context/user';

/**
 * @description: Only use it in hooks
 */
export const onlyMember = () => {
  const router = useRouter();
  const user = useUser();

  if (!user) {
    router.push('/');
  }
};

export const validateRequest = (isLoggedIn: boolean) => {
  return typeof window !== 'undefined' || isLoggedIn;
};

export const redirect = (res: ServerResponse, location: string) => {
  res.writeHead(302, {
    Location: location,
  });
  res.end();
};
