import React from 'react';

import { Company } from './company/Company';
import { Contact } from './contact/Contact';
import { Menu } from './menu/Menu';
import { NewsletterInfo } from './newsletter/NewsletterInfo';

import { Container } from 'components/atoms/container/Container';

export const Footer = () => (
  <footer className="bg-[#0D0E14] pb-10 pt-16">
    <Container className="flex justify-between">
      <NewsletterInfo />
      <Company />
      <Menu />
      <Contact />
    </Container>
  </footer>
);
