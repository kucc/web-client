import { User } from './User';

declare module 'next' {
  export interface NextPageContext {
    isLoggedIn: boolean;
  }
}

declare module 'next/app' {
  export interface AppProps {
    user: User | string;
    pathname: string;
  }
}
