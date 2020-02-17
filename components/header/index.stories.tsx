import { storiesOf } from '@storybook/react';
import Header from '.';

storiesOf('Header', module).add('not-logged-in', () => {
  return <Header />;
});
