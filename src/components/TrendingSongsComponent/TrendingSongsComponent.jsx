import React from 'react';
import './TrendingSongsComponent.css';
import TrendingSongCard from '../TrendingSongCard/TrendingSongCard';
import trending01 from '../../assets/trendingSongImage/trending01.png';
import trending02 from '../../assets/trendingSongImage/trending02.png';
import trending03 from '../../assets/trendingSongImage/trending03.png';
import trending04 from '../../assets/trendingSongImage/trending04.png';
import trending05 from '../../assets/trendingSongImage/trending05.png';
import trendingHeader from '../../assets/trending-header.png';

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
    </div>
  );
}
