import React from 'react';
import './TrendingSongCard.css';
import { ReactComponent as Share } from '../../assets/icons/Vector.svg';
import { ReactComponent as Option } from '../../assets/icons/Vector-1.svg';

export default function TrendingSongCard({ imgSrc, index, songTitle, artiste, time }) {
  return (
    <div className="trending-song-card-container">
      <div className="left-section">
        <div className="song-details-section">
          <p className="index"> {index} </p>
          <div className="image-container">
            <img src={imgSrc} alt={`${songTitle}_cover`} />
          </div>
          <div className="song-details">
            <p className="song-title"> {songTitle} </p>
            <p className="artiste-name"> {artiste} </p>
          </div>
        </div>

        <div className="time-section">
          <p className="time"> {time} </p>
        </div>
      </div>
      <div className="options-section">
        <div className="share-icon">
          <Share />
        </div>
        <div className="option-icon">
          <Option />
        </div>
      </div>
    </div>
  );
}
