import React from 'react';
import jwt from 'jsonwebtoken';
import Cookies from 'universal-cookie';
import App, { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { UserProvider } from '../../context/user';

const theme = {
  colors: {},
};

class MyApp extends App<AppProps> {
  public static async getInitialProps(appContext) {
    const { pathname, req } = appContext.ctx;

    const props = initProps(pathname);

    if (req) {
      try {
        const cookies = new Cookies(req.headers.cookie);

        const accessToken = cookies.get(process.env.JWT_ACCESS_TOKEN_KEY);

        if (!accessToken) {
          throw new Error();
        }

        const { data }: any = jwt.verify(accessToken, process.env.JWT_SECRET);

        props.user = data;
        appContext.ctx.isLoggedIn = true;
      } catch (err) {
        appContext.ctx.isLoggedIn = false;
      }
    }

    const appProps = await App.getInitialProps(appContext);

    return {
      ...appProps,
      ...props,
    };
  }

  render() {
    const { Component, pageProps, user } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <UserProvider user={user}>
          <Component {...pageProps} />
        </UserProvider>
      </ThemeProvider>
    );
  }
}

function initProps(pathname: string): AppProps {
  return {
    pathname,
    user: null,
  };
}

export default MyApp;
