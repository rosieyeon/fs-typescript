import React from 'react';

import { HomeLayout, HomeLogo } from './Home.styled';

const Home: React.FC = () => {
  return (
    <HomeLayout>
      <HomeLogo src="images/logo/t1.jpeg" />
    </HomeLayout>
  );
};

export default Home;
