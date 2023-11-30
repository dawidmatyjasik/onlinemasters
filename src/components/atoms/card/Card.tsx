import type { PropsWithChildren } from 'react';
import React from 'react';

export const Card = ({ children }: PropsWithChildren) => (
  <article className="bg-white p-10" style={{ boxShadow: '0px 10px 35px -20px rgba(0,0,0,.16)' }}>
    {children}
  </article>
);
