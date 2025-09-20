import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { COMMITTEES } from '../utils/constants';
import './CommitteeDetail.css';

const CommitteeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const committee = COMMITTEES.find(c => c.id === id);

  if (!committee) {
    return (
      <div className="committee-detail-page">
        <div className="container">
          <div className="not-found">
            <h1>Komite Bulunamadı</h1>
            <p>Aradığınız komite mevcut değil.</p>
            <Link to="/komiteler" className="back-link">← Komitelere Dön</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="committee-detail-page">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/komiteler" className="breadcrumb-link">Komiteler</Link>
          <span className="breadcrumb-separator">›</span>
          <span className="breadcrumb-current">{committee.name}</span>
        </nav>

        {/* Header */}
        <div className="committee-header">
          <div className="committee-icon-large">{committee.icon}</div>
          <div className="committee-header-content">
            <h1 className="committee-title">{committee.name} Komitesi</h1>
            <p className="committee-description-large">{committee.description}</p>
          </div>
        </div>

        {/* Moderators */}
        <section className="committee-section">
          <h2 className="section-title">Komite Moderatörleri</h2>
          <div className="moderators-grid">
            {committee.moderators?.map((moderator, index) => (
              <div key={index} className="moderator-card">
                <div className="moderator-photo-container">
                  <img 
                    src={moderator.photo} 
                    alt={moderator.name} 
                    className="moderator-photo"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
                <h3 className="moderator-name">{moderator.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Topics */}
        <section className="committee-section">
          <h2 className="section-title">Komite Konuları</h2>
          <div className="topics-container">
            {committee.topics?.map((topic, index) => (
              <div key={index} className="topic-card">
                <div className="topic-number">{index + 1}</div>
                <div className="topic-content">
                  <h3 className="topic-title">{topic}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Back Button */}
        <div className="committee-actions">
          <Link to="/komiteler" className="back-button">
            ← Tüm Komitelere Dön
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CommitteeDetail;