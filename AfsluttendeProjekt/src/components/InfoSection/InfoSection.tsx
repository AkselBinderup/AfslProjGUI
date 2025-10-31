import React from 'react';
import './InfoSection.css';
import PlaceholderImage from '../../assets/zalmodel.png';


export const InfoSection: React.FC = () => {
  return (
    <section className="InfoSection">
      <div className="InfoImageContainer">
        <img
          src={PlaceholderImage}
          alt="Fashion Info"
          className="InfoImage"
        />
      </div>

      <div className="InfoOverlay">
        <div className="InfoText">
          <h1>Fashion starts here.</h1>
          <p>Discover refined design, soft tones, and the art of subtle sophistication.</p>
          <p className="InfoHighlight">Only at AURA.</p>
        </div>
      </div>
    </section>
  );
};
