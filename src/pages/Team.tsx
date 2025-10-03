import React from 'react';
import { EVENT_INFO } from '../utils/constants';
import './Team.css';

const Team: React.FC = () => {
  const teamMembers = [
    // Genel Koordinatörler
    {
      name: 'Berru Yaşlı',
      role: 'Genel Koordinatör',
      description: 'Proje yönetimi ve genel koordinasyon',
      image: '/team/berru-yasli.jpg',
      
    },
    {
      name: 'Elifnur Yaşlı',
      role: 'Genel Koordinatör',
      description: 'Proje yönetimi ve genel koordinasyon',
      image: '/team/elifnur-yasli.jpg',
      
    },
    // Finans
    {
      name: 'Ahmet Keskin',
      role: 'Finans Ekip Başkanı',
      description: 'Bütçe yönetimi ve finansal planlama',
      image: '/team/ahmet-keskin.jpg',
      
    },
    {
      name: 'Öykü Arslan',
      role: 'Finans Ekip Başkanı',
      description: 'Bütçe yönetimi ve finansal planlama',
      image: '/team/oyku-arslan.jpg',
      
    },
    // Halkla İlişkiler
    {
      name: 'Ahmet Salim Yıldırım',
      role: 'Halkla İlişkiler Ekip Başkanı',
      description: 'İletişim ve tanıtım faaliyetleri',
      image: '/team/ahmet-salim-yildirim.jpg',
      
    },
    {
      name: 'Beyza Bakın',
      role: 'Halkla İlişkiler Ekip Başkanı',
      description: 'İletişim ve tanıtım faaliyetleri',
      image: '/team/beyza-bakin.jpg',
      
    },
    {
      name: 'Kayra Anıl Kılıç',
      role: 'Halkla İlişkiler Ekip Başkanı',
      description: 'İletişim ve tanıtım faaliyetleri',
      image: '/team/kayra-anil-kilic.jpg',
      
    },
    {
      name: 'M. Asım Adıgüzel',
      role: 'Halkla İlişkiler Ekip Başkanı',
      description: 'İletişim ve tanıtım faaliyetleri',
      image: '/team/asim-adiguzel.png',
      imagePosition: 'center 30%'
    },
    // IT
    {
      name: 'Emira İnal',
      role: 'IT Ekip Başkanı',
      description: 'Teknoloji altyapısı ve dijital çözümler',
      image: '/team/emira-inal.jpg',
      
    },
    {
      name: 'Batuhan Bilgin',
      role: 'IT Ekip Başkanı',
      description: 'Teknoloji altyapısı ve dijital çözümler',
      image: '/team/batuhan-bilgin.jpeg',
      imagePosition: '60% center'
    },
    // Saha
    {
      name: 'Hayrunnisa Demir',
      role: 'Saha Ekip Başkanı',
      description: 'Etkinlik organizasyonu ve lojistik',
      image: '/team/hayrunnisa-demir.jpg',
      
    },
    {
      name: 'Hümeyra Yener',
      role: 'Saha Ekip Başkanı',
      description: 'Etkinlik organizasyonu ve lojistik',
      image: '/team/humeyra-yener.jpg',
      
    },
    // İnsan Kaynakları
    {
      name: 'Şehnaz Torak',
      role: 'İnsan Kaynakları Ekip Başkanı',
      description: 'Ekip yönetimi ve gönüllü koordinasyonu',
      image: '/team/sehnaz-torak.jpg',
      
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
                  <div className="member-avatar">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      style={member.imagePosition ? { objectPosition: member.imagePosition } : {}}
                    />
                  </div>
                  <div className="member-info">
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                    <p className="member-description">{member.description}</p>
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
                destekçi kurumlara ve ailelerimize 
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
