import React from 'react';
import { CONTACT_INFO } from '../utils/constants';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">💬 İletişim</h1>
            <p className="hero-subtitle">
              Cumhuriyet değerleri etrafında bir araya geliyoruz. Sorularınız için bizimle iletişime geçin.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container">

        <div className="contact-content">
          {/* İletişim Bilgileri */}
          <div className="contact-info-section">
            <div className="section-header">
              <h2 className="section-title">📞 Bizimle İletişime Geçin</h2>
              <p className="section-subtitle">Her türlü sorunuz için buradayız</p>
            </div>
            <div className="contact-cards">
              <div className="contact-card modern">
                <div className="card-glow"></div>
                <div className="contact-icon gradient">📧</div>
                <h3>E-posta</h3>
                <p>
                  <span className="contact-text">
                    {CONTACT_INFO.email}
                  </span>
                </p>
                <span className="contact-note">⚡ 7/24 yanıtlıyoruz</span>
              </div>

              <div className="contact-card modern">
                <div className="card-glow"></div>
                <div className="contact-icon gradient">📱</div>
                <h3>İletişim</h3>
                <p>
                  <strong>İnsan Kaynakları Başkanı</strong><br/>
                  <strong>Şehnaz TORAK</strong><br/>
                  <span className="contact-text">
                    {CONTACT_INFO.phone}
                  </span>
                </p>
                <span className="contact-note">🕒 Mesai saatleri içinde</span>
              </div>

              <div className="contact-card modern">
                <div className="card-glow"></div>
                <div className="contact-icon gradient">📍</div>
                <h3>Mekan</h3>
                <p>{CONTACT_INFO.address}</p>
                <span className="contact-note">🏭 Etkinlik yeri</span>
              </div>
            </div>
          </div>

          {/* Sosyal Medya */}
          <div className="social-media-section">
            <div className="section-header">
              <h2 className="section-title">🌟 Bizi Takip Edin</h2>
              <p className="section-subtitle">Sosyal medyada güncel kalın</p>
            </div>
            <div className="social-cards">
              <a 
                href={CONTACT_INFO.socialMedia.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-card instagram modern"
              >
                <div className="social-glow instagram-glow"></div>
                <div className="social-icon instagram-icon">📷</div>
                <h4>Instagram</h4>
                <p>Güncel paylaşımlar ve etkinlik fotoğrafları</p>
                <span className="social-handle">@1923calistayii</span>
                <div className="social-arrow">→</div>
              </a>


            </div>
          </div>



          {/* SSS */}
          <div className="faq-section">
            <div className="section-header">
              <h2 className="section-title">❓ Sık Sorulan Sorular</h2>
              <p className="section-subtitle">Merak ettiklerinizin yanıtları</p>
            </div>
            <div className="faq-list">
              <div className="faq-item modern">
                <div className="faq-icon">💰</div>
                <div className="faq-content">
                  <h4>Etkinlik ücretsiz mi?</h4>
                  <p>Evet, 1923 Çalıştayı tamamen ücretsizdir. Yemek ve içecek ikramları da dahildir.</p>
                </div>
              </div>
              
              <div className="faq-item modern">
                <div className="faq-icon">🎓</div>
                <div className="faq-content">
                  <h4>Başvuru için yaş sınırı var mı?</h4>
                  <p>Etkinlik lise öğrencileri için tasarlanmıştır. 9-12. sınıf öğrencileri başvurabilir.</p>
                </div>
              </div>
              
              <div className="faq-item modern">
                <div className="faq-icon">🎯</div>
                <div className="faq-content">
                  <h4>Komite seçimini nasıl yapmalıyım?</h4>
                  <p>İlgi alanınıza ve gelecek hedeflerinize göre 3 komite seçebilirsiniz. Detaylar komiteler sayfasında.</p>
                </div>
              </div>
              
              <div className="faq-item modern">
                <div className="faq-icon">🏆</div>
                <div className="faq-content">
                  <h4>Etkinlik sertifikası verilecek mi?</h4>
                  <p>Evet, tüm katılımcılara dijital katılım sertifikası verilecektir.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
