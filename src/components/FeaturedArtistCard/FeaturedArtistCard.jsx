import React from 'react';
import './FeaturedArtistCard.css';

export default function FeaturedArtistCard({ imgSrc, trackName, ArtistName }) {
  return (
    <div className="featured-artist-card">
      <div className="image-container">
        <img src={imgSrc} alt={`${trackName}_cover`} />
      </div>
      <div className="track-details">
        <p className="track-name">{trackName}</p>
        <p className="artist-name"> {ArtistName} </p>
      </div>
    </div>
  );
}
