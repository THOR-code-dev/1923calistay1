import React from 'react';
import HeroSection from '../components/home/HeroSection';
import MissionVision from '../components/home/MissionVision';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <MissionVision />
    </div>
  );
};

export default Home;
