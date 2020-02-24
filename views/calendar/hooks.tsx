import { useState } from 'react';

import { Month } from './model/month';

export const useMonth = () => {
  const [month, setMonth] = useState(Month.now());

  return {
    month,
  };
};
