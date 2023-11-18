import React from 'react';

import { Company } from './company/Company';
import { Contact } from './contact/Contact';
import { Copyright } from './copyright/Copyright';
import { Menu } from './menu/Menu';
import { NewsletterInfo } from './newsletter/NewsletterInfo';

import { Container } from 'components/atoms/container/Container';

export const Footer = () => (
  <footer className="flex flex-col gap-10 bg-[#0D0E14] pb-10 pt-16">
    <Container className="flex flex-col-reverse justify-between gap-10 lg:flex-row">
      <NewsletterInfo />
      <Company />
      <Menu />
      <Contact />
    </Container>
    <Copyright />
  </footer>
);
