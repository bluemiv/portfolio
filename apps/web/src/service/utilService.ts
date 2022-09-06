import type { RefObject } from 'react';

export const scrollIntoComponent = (ref?: RefObject<HTMLDivElement>) =>
  ref?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
