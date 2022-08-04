import React from 'react';
import './PlaylistCard.css';

export default function PlaylistCard({ imgSrc, albumTitle, artist }) {
  return (
    <div>
      <div className="image-container">
        {' '}
        <img src={imgSrc} alt={`${albumTitle}_cover`} />{' '}
      </div>
      <div className="info-container">
        <h4> {albumTitle} </h4>
        <p> {artist} </p>
      </div>
    </div>
  );
}
