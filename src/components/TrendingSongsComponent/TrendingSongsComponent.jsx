import React from 'react';
import './TrendingSongsComponent.css';
import TrendingSongCard from '../TrendingSongCard/TrendingSongCard';
import trending01 from '../../assets/trendingSongImage/trending01.png';
import trending02 from '../../assets/trendingSongImage/trending02.png';
import trending03 from '../../assets/trendingSongImage/trending03.png';
import trending04 from '../../assets/trendingSongImage/trending04.png';
import trending05 from '../../assets/trendingSongImage/trending05.png';
import trendingHeader from '../../assets/trendingSongImage/trending-header.png';
import trendingBig from '../../assets/trendingSongImage/trending-big.png';
import trendingSmall1 from '../../assets/trendingSongImage/trending-small-1.png';
import trendingSmall2 from '../../assets/trendingSongImage/trending-small-2.png';
import OnboardingFooter from '../OnboardingFooter/OnboardingFooter';

export default function TrendingSongsComponent() {
  const songData = [
    {
      id: '01',
      imgSrc: trending01,
      songTitle: 'Work Hard, Play Hard',
      artisteName: 'SeunAra',
      time: '04:32',
    },
    {
      id: '02',
      imgSrc: trending02,
      songTitle: 'One Last Time',
      artisteName: 'Harry Bili',
      time: '03:32',
    },
    {
      id: '03',
      imgSrc: trending03,
      songTitle: 'Work Hard, Play Hard',
      artisteName: 'SeunAra',
      time: '05:41',
    },
    {
      id: '04',
      imgSrc: trending04,
      songTitle: 'Work Hard, Play Hard',
      artisteName: 'SeunAra',
      time: '04:11',
    },
    {
      id: '05',
      imgSrc: trending05,
      songTitle: 'Work Hard, Play Hard',
      artisteName: 'SeunAra',
      time: '03:59',
    },
  ];
  return (
    <div className="trending-song-container">
      <h2 className="trending-title">Trending songs for you</h2>
      <div className="trending-content">
        <div className="featured-component-image">
          <img className="featured-img" src={trendingHeader} alt="trending" />
          <div className="component-image-bg" />
        </div>
        <h1 className="vibe">VIBE</h1>
        <div className="trending-music-container">
          {songData.map((song) => (
            <TrendingSongCard
              imgSrc={song.imgSrc}
              songTitle={song.songTitle}
              artiste={song.artisteName}
              time={song.time}
              index={song.id}
            />
          ))}
        </div>
      </div>
      <h2 className="jam-text-1">Jam Beautiful Songs</h2>
      <h2 className="jam-text-2">Jam Beautiful Songs</h2>
      <div className="trending-bottom-section">
        <div className="trending-small-1">
          <img className="trending-small-img" src={trendingSmall1} alt="trending-small" />
          <div className="component-small-1-bg" />
        </div>
        <div className="trending-big">
          <img src={trendingBig} alt="trending-big" />
        </div>
        <div className="trending-small-2">
          <img src={trendingSmall2} alt="trending-small" />
          <div className="component-small-2-bg" />
        </div>
      </div>
      <OnboardingFooter />
    </div>
  );
}
