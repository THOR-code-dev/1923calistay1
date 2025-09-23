import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES, EVENT_INFO } from '../../utils/constants';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="badge-icon">🇹🇷</span>
              <span className="badge-text">Cumhuriyet'in 102. Yılında</span>
            </div>
            
            <h1 className="hero-title">
              <span className="hero-year">1923</span>
              <span className="hero-subtitle">Cumhuriyet Çalıştayı</span>
            </h1>
            
            <p className="hero-description">
              Gençlerin özgürce düşünebildiği, fikirlerini paylaşabildiği ve 
              Cumhuriyet değerlerini yaşatabildiği güvenli bir platform. 
              Birlikte öğreniyor, birlikte gelişiyoruz.
            </p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">11</span>
                <span className="stat-label">Komite</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <span className="stat-label">Katılımcı</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2</span>
                <span className="stat-label">Gün</span>
              </div>
            </div>
            
            <div className="hero-actions">
              <Link to={ROUTES.APPLICATION} className="btn btn-primary hero-btn">
                <span>Hemen Başvur</span>
                <span className="btn-icon">→</span>
              </Link>
              <Link to={ROUTES.ABOUT} className="btn btn-secondary hero-btn">
                <span>Daha Fazla Bilgi</span>
              </Link>
            </div>
            
            <div className="hero-info">
              <div className="info-item">
                <span className="info-icon">📅</span>
                <div className="info-content">
                  <span className="info-label">Tarih</span>
                  <span className="info-value">{EVENT_INFO.date}</span>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">📍</span>
                <div className="info-content">
                  <span className="info-label">Mekan</span>
                  <span className="info-value">{EVENT_INFO.location}</span>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">⏰</span>
                <div className="info-content">
                  <span className="info-label">Son Başvuru</span>
                  <span className="info-value">{EVENT_INFO.applicationDeadline}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="hero-card">
              <div className="card-header">
                <div className="card-icon">🏛️</div>
                <h3>Cumhuriyet Ruhu</h3>
              </div>
              <div className="card-content">
                <p>
                  "Egemenlik kayıtsız şartsız milletindir" ilkesiyle 
                  kurulmuş Cumhuriyet'in değerlerini yaşatıyoruz.
                </p>
              </div>
            </div>
            
            <div className="hero-decoration">
              <div className="decoration-circle circle-1"></div>
              <div className="decoration-circle circle-2"></div>
              <div className="decoration-circle circle-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
