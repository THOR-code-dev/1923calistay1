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
                  <a href={`mailto:${CONTACT_INFO.email}`} className="contact-link">
                    {CONTACT_INFO.email}
                  </a>
                </p>
                <span className="contact-note">⚡ 7/24 yanıtlıyoruz</span>
              </div>

              <div className="contact-card modern">
                <div className="card-glow"></div>
                <div className="contact-icon gradient">📱</div>
                <h3>Telefon</h3>
                <p>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="contact-link">
                    {CONTACT_INFO.phone}
                  </a>
                </p>
                <span className="contact-note">🕒 Mesai saatleri içinde</span>
              </div>

              <div className="contact-card modern">
                <div className="card-glow"></div>
                <div className="contact-icon gradient">📍</div>
                <h3>Adres</h3>
                <p>{CONTACT_INFO.address}</p>
                <span className="contact-note">🔄 Yakında güncellenecek</span>
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
                <span className="social-handle">@1923calistay</span>
                <div className="social-arrow">→</div>
              </a>

              <a 
                href={CONTACT_INFO.socialMedia.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-card twitter modern"
              >
                <div className="social-glow twitter-glow"></div>
                <div className="social-icon twitter-icon">🐦</div>
                <h4>Twitter</h4>
                <p>Anlık güncellemeler ve duyurular</p>
                <span className="social-handle">@1923calistay</span>
                <div className="social-arrow">→</div>
              </a>

              <a 
                href={CONTACT_INFO.socialMedia.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-card linkedin modern"
              >
                <div className="social-glow linkedin-glow"></div>
                <div className="social-icon linkedin-icon">💼</div>
                <h4>LinkedIn</h4>
                <p>Profesyonel ağ ve kariyer fırsatları</p>
                <span className="social-handle">1923 Çalıştay</span>
                <div className="social-arrow">→</div>
              </a>
            </div>
          </div>

          {/* İletişim Formu */}
          <div className="contact-form-section">
            <div className="section-header">
              <h2 className="section-title">✉️ Bize Yazın</h2>
              <p className="section-subtitle">Mesajınızı en kısa sürede yanıtlayacağız</p>
            </div>
            <div className="form-container">
              <div className="form-background"></div>
              <form className="contact-form modern">
                <div className="form-row">
                  <div className="form-group floating">
                    <input type="text" id="name" name="name" required placeholder=" " />
                    <label htmlFor="name" className="floating-label">Ad Soyad *</label>
                  </div>
                  <div className="form-group floating">
                    <input type="email" id="email" name="email" required placeholder=" " />
                    <label htmlFor="email" className="floating-label">E-posta *</label>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Konu *</label>
                  <select id="subject" name="subject" required>
                    <option value="">Konu seçiniz</option>
                    <option value="application">📝 Başvuru Hakkında</option>
                    <option value="committees">👥 Komiteler Hakkında</option>
                    <option value="event-details">📅 Etkinlik Detayları</option>
                    <option value="technical">🔧 Teknik Sorun</option>
                    <option value="partnership">🤝 İş Birliği</option>
                    <option value="other">💭 Diğer</option>
                  </select>
                </div>

                <div className="form-group floating">
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={6}
                    required
                    placeholder="Mesajınızı buraya yazın..."
                  ></textarea>
                  <label htmlFor="message" className="floating-label">Mesajınız *</label>
                </div>

                <div className="form-group checkbox-group">
                  <label className="checkbox-label modern">
                    <input type="checkbox" name="privacy" required />
                    <span className="checkmark modern"></span>
                    <span className="checkbox-text">Kişisel verilerimin işlenmesine onay veriyorum *</span>
                  </label>
                </div>

                <div className="form-submit">
                  <button type="submit" className="btn btn-primary modern">
                    <span>Mesajı Gönder</span>
                    <div className="btn-glow"></div>
                  </button>
                </div>
              </form>
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
