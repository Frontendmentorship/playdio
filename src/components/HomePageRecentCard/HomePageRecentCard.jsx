import React from 'react';
import './HomePageRecentCard.css';

function HomePageRecentCard({ imgSrc, albumTitle, trackTitle, time, artist, indexNumber }) {
  return (
    <div className="recent-card">
      <p className="index-number"> {`${indexNumber}.`} </p>
      <section className="info-section">
        <div className="title-section">
          <div className="recent-card-img">
            <img src={imgSrc} alt={`${albumTitle}_cover`} />
          </div>
          <div className="title-description">
            <h4 className="track-title"> {trackTitle} </h4>
            <p className="artist-name"> {artist} </p>
          </div>
        </div>
        <div className="album-section">
          <h4 className="album-title"> {albumTitle} </h4>
        </div>
        <div className="time-section">
          <p> {time} </p>
        </div>
      </section>
      <div className="option-icon">...</div>
    </div>
  );
}
export default HomePageRecentCard;
