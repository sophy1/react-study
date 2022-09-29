import React from 'react';

import Section4 from "./section4/Section4";
import Section5 from "./section5/Section5";
import Section7 from "./section7/Section7";
import Section8 from "./section8/Section8";
import Section12 from "./section12/Section12";

const Home = () => {
  return (
    <div className="Home">
      <Section4 />
      <Section5 />
      <Section7 />
      <Section8 />
      <Section12 />
    </div>
  );
}

export default Home;