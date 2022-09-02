import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <Content>
      <p>Welcome to our website! Here you will find cheap wonderbox!</p>
      <p> </p>
    </Content>
  </Main>
);

export default About;
