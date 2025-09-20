import React from 'react';
import { EVENT_INFO } from '../utils/constants';
import './Team.css';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Ahmet Yılmaz',
      role: 'Genel Koordinatör',
      description: 'Proje yönetimi ve genel koordinasyon',
      image: '👨‍💼',
      contact: 'ahmet@1923calistay.org'
    },
    {
      name: 'Zeynep Kaya',
      role: 'Akademik Koordinatör',
      description: 'Komite içerikleri ve akademik program',
      image: '👩‍🎓',
      contact: 'zeynep@1923calistay.org'
    },
    {
      name: 'Mehmet Demir',
      role: 'Organizasyon Sorumlusu',
      description: 'Etkinlik organizasyonu ve lojistik',
      image: '👨‍💻',
      contact: 'mehmet@1923calistay.org'
    },
    {
      name: 'Ayşe Özkan',
      role: 'İletişim Sorumlusu',
      description: 'Sosyal medya ve kurumsal iletişim',
      image: '👩‍💼',
      contact: 'ayse@1923calistay.org'
    }
  ];

  const advisors = [
    {
      name: 'Prof. Dr. Ali Vural',
      role: 'Akademik Danışman',
      field: 'Tarih',
      institution: 'İstanbul Üniversitesi'
    },
    {
      name: 'Doç. Dr. Elif Şahin',
      role: 'Akademik Danışman',
      field: 'Siyaset Bilimi',
      institution: 'Ankara Üniversitesi'
    },
    {
      name: 'Dr. Öğr. Üyesi Murat Çelik',
      role: 'Akademik Danışman',
      field: 'Sosyoloji',
      institution: 'Boğaziçi Üniversitesi'
    }
  ];

  return (
    <div className="team-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Ekibimiz</h1>
          <p className="page-subtitle">
            1923 Çalıştayı'nı hayata geçiren gençler ve danışmanlar
          </p>
        </div>

        <div className="team-content">
          {/* Organizasyon Ekibi */}
          <section className="team-section">
            <h2 className="section-title">Organizasyon Ekibi</h2>
            <p className="section-description">
              Lise öğrencilerinden oluşan organizasyon ekibimiz, bu projeyi gönüllülük esasıyla yürütmektedir.
            </p>
            
            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <div key={index} className="team-card">
                  <div className="member-avatar">{member.image}</div>
                  <div className="member-info">
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                    <p className="member-description">{member.description}</p>
                    <a href={`mailto:${member.contact}`} className="member-contact">
                      {member.contact}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Akademik Danışmanlar */}
          <section className="advisors-section">
            <h2 className="section-title">Akademik Danışmanlar</h2>
            <p className="section-description">
              Alanında uzman akademisyenlerimiz, içerik kalitesi ve akademik doğruluk konusunda rehberlik etmektedir.
            </p>
            
            <div className="advisors-grid">
              {advisors.map((advisor, index) => (
                <div key={index} className="advisor-card">
                  <div className="advisor-avatar">🎓</div>
                  <div className="advisor-info">
                    <h4 className="advisor-name">{advisor.name}</h4>
                    <p className="advisor-role">{advisor.role}</p>
                    <p className="advisor-field">{advisor.field}</p>
                    <p className="advisor-institution">{advisor.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Ekibe Katıl */}
          <section className="join-team-section">
            <div className="join-team-card">
              <div className="join-team-content">
                <h3>Ekibimize Katılmak İster misin?</h3>
                <p>
                  Geleceğin çalıştaylarında yer almak, organizasyon deneyimi kazanmak ve 
                  Cumhuriyet değerlerini yaygınlaştırmak için bizimle çalışabilirsin.
                </p>
                <div className="join-opportunities">
                  <div className="opportunity-item">
                    <span className="opportunity-icon">📝</span>
                    <span>İçerik Geliştirme</span>
                  </div>
                  <div className="opportunity-item">
                    <span className="opportunity-icon">📱</span>
                    <span>Sosyal Medya</span>
                  </div>
                  <div className="opportunity-item">
                    <span className="opportunity-icon">🎨</span>
                    <span>Tasarım</span>
                  </div>
                  <div className="opportunity-item">
                    <span className="opportunity-icon">💻</span>
                    <span>Teknoloji</span>
                  </div>
                </div>
                <a 
                  href={EVENT_INFO.applicationForm} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                >
                  Ekibe Katıl
                </a>
              </div>
              <div className="join-team-visual">
                <div className="visual-circle">
                  <span className="visual-icon">🤝</span>
                </div>
              </div>
            </div>
          </section>

          {/* Teşekkürler */}
          <section className="thanks-section">
            <h2 className="section-title">Teşekkürler</h2>
            <div className="thanks-content">
              <p>
                Bu projenin hayata geçmesinde emeği geçen tüm gönüllülere, 
                akademik danışmanlarımıza, destekçi kurumlara ve ailelerimize 
                sonsuz teşekkürlerimizi sunuyoruz.
              </p>
              <div className="thanks-badges">
                <div className="thanks-badge">
                  <span className="badge-icon">❤️</span>
                  <span>Gönüllülük</span>
                </div>
                <div className="thanks-badge">
                  <span className="badge-icon">🎯</span>
                  <span>Hedef Odaklılık</span>
                </div>
                <div className="thanks-badge">
                  <span className="badge-icon">🤝</span>
                  <span>İş Birliği</span>
                </div>
                <div className="thanks-badge">
                  <span className="badge-icon">🌟</span>
                  <span>Kalite</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Team;
