import React from 'react';
import OnboardInput from '../../components/OnboardInput';
import HomePageRecentCard from '../../components/HomePageRecentCard/HomePageRecentCard';
import PlaylistCard from '../../components/PlaylistCard/PlaylistCard';

function Home() {
  return (
    <div>
      Home Page
      <OnboardInput label="Password" />
      <HomePageRecentCard
        indexNumber="1"
        trackTitle="easy on me"
        albumTitle="Easy on me(single) "
        time="3:22"
        artist="Adele"
      />
      <PlaylistCard albumTitle="Easy on me(single)" artist="Burna Boy" />
    </div>
  );
}

export default Home;
