import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/constants';
import './MissionVision.css';

const MissionVision: React.FC = () => {
  return (
    <section className="mission-vision">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-highlight">Misyonumuz</span>
            <span className="title-separator">&</span>
            <span className="title-vision">Vizyonumuz</span>
          </h2>
          <p className="section-subtitle">
            Cumhuriyet değerlerini yaşatan, geleceği şekillendiren gençlik platformu
          </p>
        </div>

        <div className="mission-vision-content">
          {/* Misyon */}
          <div className="mission-card">
            <div className="card-icon">
              <span className="icon">🎯</span>
            </div>
            <div className="card-header">
              <h3 className="card-title">Misyonumuz</h3>
              <div className="card-decoration"></div>
            </div>
            <div className="card-content">
              <p>
                Cumhuriyet'in bize kazandırdığı <strong>ifade özgürlüğü</strong> değerini esas alarak; 
                gençlerin kendi düşüncelerini özgürce dile getirebildiği, farklı bakış açılarını 
                saygıyla dinleyebildiği güvenli bir alan oluşturuyoruz.
              </p>
              <p>
                Liseliler tarafından hayata geçirilen bu oluşum, gençlerin toplumsal konulara 
                dair bilinç geliştirmelerini, <strong>aktif vatandaşlık</strong> anlayışıyla 
                hareket etmelerini teşvik eder.
              </p>
            </div>
            <div className="card-features">
              <div className="feature-item">
                <span className="feature-icon">💬</span>
                <span>Özgür İfade</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🤝</span>
                <span>Saygılı Dinleme</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🌱</span>
                <span>Bilinç Geliştirme</span>
              </div>
            </div>
          </div>

          {/* Vizyon */}
          <div className="vision-card">
            <div className="card-icon">
              <span className="icon">🔮</span>
            </div>
            <div className="card-header">
              <h3 className="card-title">Vizyonumuz</h3>
              <div className="card-decoration"></div>
            </div>
            <div className="card-content">
              <p>
                Cumhuriyet'i sadece geçmişin bir kazanımı değil, <strong>bugünün ve geleceğin 
                ortak sorumluluğu</strong> olarak gören bir gençlik topluluğu oluşturmak 
                en büyük hedefimizdir.
              </p>
              <p>
                Farklılıkların zenginlik kabul edildiği, çok sesliliğin güç verdiği ve 
                 <strong> demokratik katılımı</strong> önceleyen bir kültür inşa etmek istiyoruz.
              </p>
            </div>
            <div className="card-features">
              <div className="feature-item">
                <span className="feature-icon">🏛️</span>
                <span>Demokratik Katılım</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🌈</span>
                <span>Çok Seslilik</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🚀</span>
                <span>Sürdürülebilir Gelecek</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mission-vision-cta">
          <div className="cta-content">
            <h3 className="cta-title">Bizimle Bu Yolculuğa Çıkmaya Hazır mısın?</h3>
            <p className="cta-description">
              Cumhuriyet değerlerini yaşatmak, geleceği birlikte şekillendirmek için aramıza katıl.
            </p>
            <div className="cta-actions">
              <Link to={ROUTES.ABOUT} className="btn btn-primary">
                Daha Fazla Bilgi Al
              </Link>
              <Link to={ROUTES.APPLICATION} className="btn btn-outline">
                Hemen Başvur
              </Link>
            </div>
          </div>
          <div className="cta-visual">
            <div className="visual-element">
              <div className="element-circle"></div>
              <div className="element-text">102</div>
              <div className="element-subtitle">Yıl Sonra</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
