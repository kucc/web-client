import { User } from '../model/user';

declare module 'next' {
  export interface NextPageContext {
    isLoggedIn: boolean;
  }
}

declare module 'next/app' {
  export interface AppProps {
    user: User;
    pathname: string;
  }
}
