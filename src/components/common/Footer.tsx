import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, NAVIGATION_ITEMS } from '../../utils/constants';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Logo ve Açıklama */}
          <div className="footer-section">
            <div className="footer-logo">
              <span className="footer-logo-year">1923</span>
              <span className="footer-logo-text">Çalıştay</span>
            </div>
            <p className="footer-description">
              Cumhuriyet değerlerini yaşatan ve yaygınlaştıran gençlik platformu.
              İfade özgürlüğü, demokratik katılım ve sosyal sorumluluk.
            </p>
          </div>

          {/* Hızlı Linkler */}
          <div className="footer-section">
            <h4 className="footer-title">Hızlı Linkler</h4>
            <ul className="footer-links">
              {NAVIGATION_ITEMS.slice(0, 4).map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="footer-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Diğer Sayfalar */}
          <div className="footer-section">
            <h4 className="footer-title">Sayfalar</h4>
            <ul className="footer-links">
              {NAVIGATION_ITEMS.slice(4).map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="footer-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div className="footer-section">
            <h4 className="footer-title">İletişim</h4>
            <div className="contact-info">
              <p className="contact-item">
                <span className="contact-icon">📧</span>
                <span>{CONTACT_INFO.email}</span>
              </p>
              <p className="contact-item">
                <span className="contact-icon">📞</span>
                <span>İnsan Kaynakları Başkanı</span>
              </p>
              <p className="contact-item">
                <span className="contact-icon">👤</span>
                <span>Şehnaz TORAK</span>
              </p>
              <p className="contact-item">
                <span className="contact-icon">📱</span>
                <span>{CONTACT_INFO.phone}</span>
              </p>
            </div>
            
            {/* Sosyal Medya */}
            <div className="social-media">
              <h5 className="social-title">Bizi Takip Edin</h5>
              <div className="social-links">
                <a 
                  href={CONTACT_INFO.socialMedia.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link instagram"
                  aria-label="Instagram"
                >
                  📷
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Alt Bilgi */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} 1923 Çalıştay. Tüm hakları saklıdır.
            </p>
            <p className="heritage-text">
              Cumhuriyet'in 100. yılında, geleceğe birlikte yürüyoruz.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
