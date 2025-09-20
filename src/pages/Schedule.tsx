import React from 'react';
import './Schedule.css';

const Schedule: React.FC = () => {
  const day1Schedule = [
    {
      time: '09:00 - 09:30',
      title: 'Kayıt ve Karşılama',
      description: 'Katılımcı kayıtları ve hoş geldin kahvaltısı',
      type: 'registration',
      location: 'Ana Giriş'
    },
    {
      time: '09:30 - 10:15',
      title: 'Açılış Töreni',
      description: 'Hoş geldin konuşması ve çalıştay tanıtımı',
      type: 'ceremony',
      location: 'Ana Konferans Salonu'
    },
    {
      time: '10:15 - 10:30',
      title: 'Kahve Molası',
      description: 'Tanışma ve networking',
      type: 'break',
      location: 'Foyer Alanı'
    },
    {
      time: '10:30 - 12:00',
      title: 'Komite Tanıtımları',
      description: 'Her komitenin kendini tanıtması ve hedeflerinin paylaşılması',
      type: 'presentation',
      location: 'Ana Konferans Salonu'
    },
    {
      time: '12:00 - 13:00',
      title: 'Öğle Yemeği',
      description: 'Yemek ve sosyalleşme',
      type: 'meal',
      location: 'Yemekhane'
    },
    {
      time: '13:00 - 15:30',
      title: 'İlk Komite Oturumları',
      description: 'Komitelerde ilk tartışmalar ve konu belirleme',
      type: 'committee',
      location: 'Komite Odaları'
    },
    {
      time: '15:30 - 15:45',
      title: 'Çay Molası',
      description: 'Kısa mola ve enerji tazeleme',
      type: 'break',
      location: 'Foyer Alanı'
    },
    {
      time: '15:45 - 17:30',
      title: 'Workshop: Etkili İletişim',
      description: 'Demokratik tartışma teknikleri ve etkili sunum',
      type: 'workshop',
      location: 'Workshop Salonu'
    },
    {
      time: '17:30 - 18:00',
      title: 'Gün Değerlendirmesi',
      description: 'İlk günün özetlenmesi ve ertesi gün planı',
      type: 'evaluation',
      location: 'Ana Konferans Salonu'
    }
  ];

  const day2Schedule = [
    {
      time: '09:00 - 09:30',
      title: 'Günaydın Kahvesi',
      description: 'Güne enerjik başlangıç',
      type: 'break',
      location: 'Foyer Alanı'
    },
    {
      time: '09:30 - 11:30',
      title: 'Komite Çalışmaları',
      description: 'Derinlemesine tartışmalar ve çözüm önerileri',
      type: 'committee',
      location: 'Komite Odaları'
    },
    {
      time: '11:30 - 11:45',
      title: 'Kahve Molası',
      description: 'Kısa dinlenme',
      type: 'break',
      location: 'Foyer Alanı'
    },
    {
      time: '11:45 - 13:00',
      title: 'Sunum Hazırlığı',
      description: 'Komitelerin final sunumlarını hazırlaması',
      type: 'preparation',
      location: 'Komite Odaları'
    },
    {
      time: '13:00 - 14:00',
      title: 'Öğle Yemeği',
      description: 'Son yemek ve sohbet',
      type: 'meal',
      location: 'Yemekhane'
    },
    {
      time: '14:00 - 16:00',
      title: 'Final Sunumları',
      description: 'Her komitenin çalışmalarını sunması',
      type: 'presentation',
      location: 'Ana Konferans Salonu'
    },
    {
      time: '16:00 - 16:15',
      title: 'Çay Molası',
      description: 'Son mola',
      type: 'break',
      location: 'Foyer Alanı'
    },
    {
      time: '16:15 - 17:00',
      title: 'Kapanış Töreni',
      description: 'Sertifika töreni ve veda konuşmaları',
      type: 'ceremony',
      location: 'Ana Konferans Salonu'
    },
    {
      time: '17:00 - 17:30',
      title: 'Fotoğraf Çekimi ve Veda',
      description: 'Hatıra fotoğrafları ve vedalaşma',
      type: 'social',
      location: 'Foyer Alanı'
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'registration': return '📝';
      case 'ceremony': return '🎉';
      case 'break': return '☕';
      case 'presentation': return '🎤';
      case 'meal': return '🍽️';
      case 'committee': return '💼';
      case 'workshop': return '🛠️';
      case 'evaluation': return '📊';
      case 'preparation': return '📋';
      case 'social': return '📸';
      default: return '📅';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'registration': return '#3B82F6';
      case 'ceremony': return '#DC2626';
      case 'break': return '#059669';
      case 'presentation': return '#7C3AED';
      case 'meal': return '#EA580C';
      case 'committee': return '#C41E3A';
      case 'workshop': return '#0891B2';
      case 'evaluation': return '#7C2D12';
      case 'preparation': return '#4338CA';
      case 'social': return '#BE185D';
      default: return '#6B7280';
    }
  };

  return (
    <div className="schedule-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Program Akışı</h1>
          <p className="page-subtitle">
            2 günlük yoğun program ile dolu dolu bir çalıştay deneyimi
          </p>
        </div>

        <div className="schedule-content">
          {/* Program Özeti */}
          <div className="schedule-overview">
            <div className="overview-stats">
              <div className="stat-card">
                <div className="stat-icon">📅</div>
                <div className="stat-info">
                  <span className="stat-number">2</span>
                  <span className="stat-label">Gün</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">⏰</div>
                <div className="stat-info">
                  <span className="stat-number">16</span>
                  <span className="stat-label">Saat</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">💼</div>
                <div className="stat-info">
                  <span className="stat-number">10</span>
                  <span className="stat-label">Komite</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">🎯</div>
                <div className="stat-info">
                  <span className="stat-number">100+</span>
                  <span className="stat-label">Katılımcı</span>
                </div>
              </div>
            </div>
          </div>

          {/* 1. Gün */}
          <div className="day-section">
            <div className="day-header">
              <div className="day-title-wrapper">
                <span className="day-number">1</span>
                <div className="day-info">
                  <h2 className="day-title">Birinci Gün</h2>
                  <p className="day-description">Tanışma, komite oluşumu ve ilk tartışmalar</p>
                </div>
              </div>
            </div>
            
            <div className="schedule-timeline">
              {day1Schedule.map((item, index) => (
                <div key={index} className="schedule-item">
                  <div className="schedule-time">
                    <span className="time-text">{item.time}</span>
                  </div>
                  <div className="schedule-content-item">
                    <div 
                      className="schedule-icon" 
                      style={{ backgroundColor: getTypeColor(item.type) }}
                    >
                      {getTypeIcon(item.type)}
                    </div>
                    <div className="schedule-details">
                      <h4 className="schedule-title">{item.title}</h4>
                      <p className="schedule-description">{item.description}</p>
                      <div className="schedule-location">
                        <span className="location-icon">📍</span>
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Gün */}
          <div className="day-section">
            <div className="day-header">
              <div className="day-title-wrapper">
                <span className="day-number">2</span>
                <div className="day-info">
                  <h2 className="day-title">İkinci Gün</h2>
                  <p className="day-description">Komite çalışmaları ve final sunumları</p>
                </div>
              </div>
            </div>
            
            <div className="schedule-timeline">
              {day2Schedule.map((item, index) => (
                <div key={index} className="schedule-item">
                  <div className="schedule-time">
                    <span className="time-text">{item.time}</span>
                  </div>
                  <div className="schedule-content-item">
                    <div 
                      className="schedule-icon" 
                      style={{ backgroundColor: getTypeColor(item.type) }}
                    >
                      {getTypeIcon(item.type)}
                    </div>
                    <div className="schedule-details">
                      <h4 className="schedule-title">{item.title}</h4>
                      <p className="schedule-description">{item.description}</p>
                      <div className="schedule-location">
                        <span className="location-icon">📍</span>
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Önemli Notlar */}
          <div className="schedule-notes">
            <h3 className="notes-title">Önemli Notlar</h3>
            <div className="notes-grid">
              <div className="note-card">
                <div className="note-icon">🕐</div>
                <h4>Zamanında Katılım</h4>
                <p>Program saatlerine uyum için lütfen zamanında gelin</p>
              </div>
              <div className="note-card">
                <div className="note-icon">📱</div>
                <h4>Teknoloji Kullanımı</h4>
                <p>Laptop/tablet kullanımı teşvik edilir, şarj imkanı mevcut</p>
              </div>
              <div className="note-card">
                <div className="note-icon">🤝</div>
                <h4>Aktif Katılım</h4>
                <p>Tüm oturumlarda aktif katılım beklenmektedir</p>
              </div>
              <div className="note-card">
                <div className="note-icon">📋</div>
                <h4>Materyal</h4>
                <p>Tüm materyaller organizasyon tarafından sağlanacak</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
