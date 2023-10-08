import React from 'react';
import { SectionBox, SectionTitle } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionBox>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionBox>
  );
};

export default Section;
