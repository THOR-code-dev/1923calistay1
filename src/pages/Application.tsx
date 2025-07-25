import React from 'react';
import { EVENT_INFO } from '../utils/constants';
import './Application.css';

const Application: React.FC = () => {
  return (
    <div className="application-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Başvuru</h1>
          <p className="page-subtitle">
            1923 Çalıştayı'na katılmak için başvuru formunu doldurun
          </p>
        </div>

        <div className="application-content">
          {/* Başvuru Formu */}
          <div className="application-form-section">
            <div className="form-header">
              <h2>Başvuru Formu</h2>
              <p className="deadline-info">
                Son başvuru tarihi: <strong>{EVENT_INFO.applicationDeadline}</strong>
              </p>
            </div>

            <form className="application-form modern-form">
              {/* Kişisel Bilgiler */}
              <div className="form-section modern-section">
                <h3 className="section-title-modern">👤 Kişisel Bilgiler</h3>
                
                <div className="form-grid">
                  <div className="input-group floating">
                    <input type="text" id="firstName" name="firstName" required placeholder=" " />
                    <label htmlFor="firstName" className="floating-label">Adınız *</label>
                  </div>
                  <div className="input-group floating">
                    <input type="text" id="lastName" name="lastName" required placeholder=" " />
                    <label htmlFor="lastName" className="floating-label">Soyadınız *</label>
                  </div>
                </div>

                <div className="form-grid">
                  <div className="input-group floating">
                    <input type="email" id="email" name="email" required placeholder=" " />
                    <label htmlFor="email" className="floating-label">E-posta *</label>
                  </div>
                  <div className="input-group floating">
                    <input type="tel" id="phone" name="phone" required placeholder=" " />
                    <label htmlFor="phone" className="floating-label">Telefon *</label>
                  </div>
                </div>

                <div className="form-grid">
                  <div className="input-group">
                    <label htmlFor="birthDate">Doğum Tarihi *</label>
                    <input type="date" id="birthDate" name="birthDate" required />
                  </div>
                  <div className="input-group">
                    <label htmlFor="gender">Cinsiyet *</label>
                    <select id="gender" name="gender" required>
                      <option value="">Cinsiyet seçiniz</option>
                      <option value="female">Kadın</option>
                      <option value="male">Erkek</option>
                      <option value="other">Diğer</option>
                      <option value="prefer-not-to-say">Belirtmek istemiyorum</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Eğitim Bilgileri */}
              <div className="form-section modern-section">
                <h3 className="section-title-modern">📚 Eğitim Bilgileri</h3>
                
                <div className="form-grid">
                  <div className="input-group floating">
                    <input type="text" id="school" name="school" required placeholder=" " />
                    <label htmlFor="school" className="floating-label">Okul Adı *</label>
                  </div>
                  <div className="input-group floating">
                    <select id="grade" name="grade" required>
                      <option value="">Sınıf seçiniz *</option>
                      <option value="9">9. Sınıf</option>
                      <option value="10">10. Sınıf</option>
                      <option value="11">11. Sınıf</option>
                      <option value="12">12. Sınıf</option>
                      <option value="university">Üniversite</option>
                      <option value="prep">Hazırlık</option>
                    </select>
                    <label htmlFor="grade" className="floating-label">Sınıf *</label>
                  </div>
                </div>

                <div className="input-group floating">
                  <input type="text" id="city" name="city" required placeholder=" " />
                  <label htmlFor="city" className="floating-label">Şehir *</label>
                </div>
              </div>

              {/* Komite Tercihleri */}
              <div className="form-section modern-section">
                <h3 className="section-title-modern">🎯 Komite Tercihleri</h3>
                <p className="section-description">
                  En çok ilgi duyduğunuz 3 komiteyi seçin
                </p>
                
                <div className="committee-selection">
                  <div className="committee-card">
                    <label className="committee-label">
                      <select id="committee1" name="committee1" required>
                        <option value="">1. Tercih *</option>
                        <option value="hukuk">⚖️ Hukuk</option>
                        <option value="psikoloji">🧠 Psikoloji</option>
                        <option value="sosyoloji">👥 Sosyoloji</option>
                        <option value="uluslararasi-iliskiler">🌍 Uluslararası İlişkiler</option>
                        <option value="felsefe">💭 Felsefe</option>
                        <option value="siyaset">🏛️ Siyaset</option>
                        <option value="tarih">📚 Tarih</option>
                        <option value="edebiyat">✍️ Edebiyat</option>
                        <option value="ekonomi">💰 Ekonomi</option>
                        <option value="egitim">🎓 Eğitim</option>
                      </select>
                    </label>
                  </div>
                  
                  <div className="committee-card">
                    <label className="committee-label">
                      <select id="committee2" name="committee2" required>
                        <option value="">2. Tercih *</option>
                        <option value="hukuk">⚖️ Hukuk</option>
                        <option value="psikoloji">🧠 Psikoloji</option>
                        <option value="sosyoloji">👥 Sosyoloji</option>
                        <option value="uluslararasi-iliskiler">🌍 Uluslararası İlişkiler</option>
                        <option value="felsefe">💭 Felsefe</option>
                        <option value="siyaset">🏛️ Siyaset</option>
                        <option value="tarih">📚 Tarih</option>
                        <option value="edebiyat">✍️ Edebiyat</option>
                        <option value="ekonomi">💰 Ekonomi</option>
                        <option value="egitim">🎓 Eğitim</option>
                      </select>
                    </label>
                  </div>
                  
                  <div className="committee-card">
                    <label className="committee-label">
                      <select id="committee3" name="committee3" required>
                        <option value="">3. Tercih *</option>
                        <option value="hukuk">⚖️ Hukuk</option>
                        <option value="psikoloji">🧠 Psikoloji</option>
                        <option value="sosyoloji">👥 Sosyoloji</option>
                        <option value="uluslararasi-iliskiler">🌍 Uluslararası İlişkiler</option>
                        <option value="felsefe">💭 Felsefe</option>
                        <option value="siyaset">🏛️ Siyaset</option>
                        <option value="tarih">📚 Tarih</option>
                        <option value="edebiyat">✍️ Edebiyat</option>
                        <option value="ekonomi">💰 Ekonomi</option>
                        <option value="egitim">🎓 Eğitim</option>
                      </select>
                    </label>
                  </div>
                </div>
              </div>

              {/* Motivasyon */}
              <div className="form-section modern-section">
                <h3 className="section-title-modern">💡 Neden Katılmak İstiyorsunuz?</h3>
                
                <div className="input-group floating">
                  <textarea 
                    id="motivation" 
                    name="motivation" 
                    rows={6}
                    maxLength={3000}
                    required
                    placeholder="Cumhuriyet değerleri, demokratik katılım ve gençlik platformları hakkındaki düşüncelerinizi paylaşın..."
                  ></textarea>
                  <label htmlFor="motivation" className="floating-label">Katılım motivasyonunuz *</label>
                </div>

                <div className="input-group floating">
                  <textarea 
                    id="experience" 
                    name="experience" 
                    rows={4}
                    placeholder="Varsa daha önceki deneyimleriniz..."
                  ></textarea>
                  <label htmlFor="experience" className="floating-label">Daha önceki deneyimleriniz</label>
                </div>
              </div>

              {/* Onay */}
              <div className="form-section modern-section">
                <h3 className="section-title-modern">✅ Son Adım</h3>
                
                <div className="checkbox-modern">
                  <label className="checkbox-modern-label">
                    <input type="checkbox" name="terms" required />
                    <span className="checkmark-modern"></span>
                    <span className="checkbox-text">Katılım koşullarını okudum ve kabul ediyorum *</span>
                  </label>
                </div>

                <div className="checkbox-modern">
                  <label className="checkbox-modern-label">
                    <input type="checkbox" name="privacy" required />
                    <span className="checkmark-modern"></span>
                    <span className="checkbox-text">Kişisel verilerimin işlenmesine onay veriyorum *</span>
                  </label>
                </div>

                <div className="checkbox-modern">
                  <label className="checkbox-modern-label">
                    <input type="checkbox" name="communication" />
                    <span className="checkmark-modern"></span>
                    <span className="checkbox-text">Gelecekteki etkinlikler hakkında bilgilendirilmek istiyorum</span>
                  </label>
                </div>
              </div>

              <div className="form-submit-modern">
                <button type="submit" className="submit-button-modern">
                  🚀 Başvuruyu Tamamla
                </button>
              </div>
            </form>
          </div>

          {/* Başvuru Bilgileri */}
          <div className="application-info">
            <div className="info-card">
              <h3>Başvuru Süreci</h3>
              <ul>
                <li>Başvuru formunu eksiksiz doldurun</li>
                <li>Başvurular değerlendirilecektir</li>
                <li>Sonuçlar e-posta ile bildirilecektir</li>
                <li>Kabul edilen katılımcılara detaylı bilgi gönderilecektir</li>
              </ul>
            </div>

            <div className="info-card">
              <h3>Önemli Notlar</h3>
              <ul>
                <li>Başvuru süreci tamamen dijitaldir</li>
                <li>Kabul edilen katılımcılar e-posta ile bilgilendirilecektir</li>
                <li>Etkinlik ücretsizdir</li>
                <li>Her yaş grubundan başvuru kabul edilmektedir</li>
              </ul>
            </div>

            <div className="info-card">
              <h3>İletişim</h3>
              <p>Sorularınız için:</p>
              <p>📧 basvuru@1923calistay.org</p>
              <p>📱 WhatsApp: +90 XXX XXX XX XX</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
