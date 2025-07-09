import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-image">
              <div className="image-placeholder">
                <div className="image-frame">
                  <div className="image-content">
                    🏔️
                    <div className="sun-icon">☀️</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hero-center">
            <div className="hero-text">
              <h1 className="hero-title">
                ULTIMATE
                <span className="sale-text">SALE</span>
              </h1>
              <p className="hero-subtitle">NEW COLLECTION</p>
              <button className="shop-now-btn">Mua ngay</button>
            </div>
            
            <div className="hero-images-stack">
              <div className="image-stack">
                <div className="stacked-image">
                  <div className="small-image">
                    🏔️
                    <div className="small-sun">☀️</div>
                  </div>
                </div>
                <div className="stacked-image">
                  <div className="small-image">
                    🏔️
                    <div className="small-sun">☀️</div>
                  </div>
                </div>
                <div className="stacked-image">
                  <div className="small-image">
                    🏔️
                    <div className="small-sun">☀️</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hero-right">
            <div className="hero-image">
              <div className="image-placeholder">
                <div className="image-frame">
                  <div className="image-content">
                    🏔️
                    <div className="sun-icon">☀️</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;