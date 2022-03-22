import React from 'react';
import PlaySection from './components/PlaySection';
import Screen from '../../components/Screen';
import MeetTheGymJunkieSection from './components/MeetTheGymJunkieSection';
import HowDoIGetBigSection from './components/HowDoIGetBigSection';
const Home = () => {
  return (
    <Screen>
      <PlaySection />
      <MeetTheGymJunkieSection />
      <HowDoIGetBigSection />
    </Screen>
  );
};

export default Home;
