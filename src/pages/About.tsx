import React from 'react';
import { MISSION_TEXT, VISION_TEXT } from '../utils/constants';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Biz Kimiz?</h1>
          <p className="page-subtitle">
            Cumhuriyet değerlerini yaşatan gençlik platformu
          </p>
        </div>

        <div className="about-content">
          {/* Misyon */}
          <section className="mission-section">
            <div className="section-icon">🎯</div>
            <h2 className="section-title">Misyonumuz</h2>
            <div className="section-content">
              {MISSION_TEXT.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph.trim()}</p>
              ))}
            </div>
          </section>

          {/* Vizyon */}
          <section className="vision-section">
            <div className="section-icon">🔮</div>
            <h2 className="section-title">Vizyonumuz</h2>
            <div className="section-content">
              {VISION_TEXT.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph.trim()}</p>
              ))}
            </div>
          </section>

          {/* Değerlerimiz */}
          <section className="values-section">
            <div className="section-icon">⭐</div>
            <h2 className="section-title">Değerlerimiz</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">🗣️</div>
                <h3>İfade Özgürlüğü</h3>
                <p>Her gencin düşüncelerini özgürce ifade edebileceği güvenli alan</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🤝</div>
                <h3>Saygılı Dinleme</h3>
                <p>Farklı görüşleri saygıyla dinleme ve anlama kültürü</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🏛️</div>
                <h3>Demokratik Katılım</h3>
                <p>Aktif vatandaşlık ve demokratik süreçlere katılım</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🌱</div>
                <h3>Sürekli Gelişim</h3>
                <p>Bireysel ve toplumsal gelişimi destekleme</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
