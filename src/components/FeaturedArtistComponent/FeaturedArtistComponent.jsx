import React from 'react';
import './FeaturedArtistComponent.css';
import featured1 from '../../assets/featuredArtistImage/adele1.png';
import featured2 from '../../assets/featuredArtistImage/adele2.png';
import featured3 from '../../assets/featuredArtistImage/adele3.png';
import featured4 from '../../assets/featuredArtistImage/adele4.png';
import featured5 from '../../assets/featuredArtistImage/adele5.png';
import featured6 from '../../assets/featuredArtistImage/adele6.png';
import FeaturedArtistCard from '../FeaturedArtistCard/FeaturedArtistCard';

export default function FeaturedArtistComponent({ featuredImage }) {
  const featuredData = [
    {
      id: 1,
      imgURL: featured1,
      trackName: 'Fire To The Raine',
      artisteName: 'Adele',
    },
    {
      id: 2,
      imgURL: featured2,
      trackName: 'Hello',
      artisteName: 'Adele',
    },
    {
      id: 3,
      imgURL: featured3,
      trackName: 'Rumor Has It',
      artisteName: 'Adele',
    },
    {
      id: 4,
      imgURL: featured4,
      trackName: 'Someone Like You',
      artisteName: 'Adele',
    },
    {
      id: 5,
      imgURL: featured5,
      trackName: 'Turning Table',
      artisteName: 'Adele',
    },
    {
      id: 6,
      imgURL: featured6,
      trackName: 'Skyfall',
      artisteName: 'Adele',
    },
  ];
  return (
    <div className="featured-component-container">
      <div className="featured-image">
        <img src={featuredImage} alt="featured" />
      </div>
      <div className="featured-details">
        <div className="featured-top-section">
          <h2 className="featured-title">Featured Artiste</h2>
          <p className="featured-sub-title"> Listen to amazing artistes from all over the world on Playdio. </p>
        </div>
        <div className="featured-bottom-section">
          {featuredData.map((data) => {
            return (
              <FeaturedArtistCard
                key={data.id}
                imgSrc={data.imgURL}
                ArtistName={data.artisteName}
                trackName={data.trackName}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
