import React from 'react';
import Breadcrumb from '../components/ui/Breadcrumb';
import AboutArea from '../components/sections/AboutArea';
import CounterArea from '../components/sections/CounterArea';
import FaqArea from '../components/sections/FaqArea';
import TestimonialArea from '../components/sections/TestimonialArea';
import TeamArea from '../components/sections/TeamArea';
import PartnerArea from '../components/sections/PartnerArea';

const About = () => {
  return (
    <>
      <Breadcrumb title="About Us" currentPage="About Us" />
      <AboutArea />
      <CounterArea />
      <FaqArea />
      <TestimonialArea />
      <TeamArea />
      <PartnerArea />
    </>
  );
};

export default About;