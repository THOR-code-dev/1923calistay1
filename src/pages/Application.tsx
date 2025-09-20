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
          {/* Başvuru Formu Yönlendirme */}
          <div className="application-form-section">
            <div className="form-header">
              <h2>Çalıştay Başvurusu</h2>
              <p className="deadline-info">
                Son başvuru tarihi: <strong>{EVENT_INFO.applicationDeadline}</strong>
              </p>
            </div>

            <div className="external-form-container">
              <div className="form-card">
                <div className="form-icon">📋</div>
                <h3>Başvuru Formu</h3>
                <p className="form-description">
                  Başvurunuzu tamamlamak için aşağıdaki butona tıklayarak 
                  resmi başvuru formuna yönlendirilirsiniz.
                </p>
                <a 
                  href={EVENT_INFO.applicationForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-form-button"
                >
                  Başvuru Formunu Aç
                  <span className="button-arrow">→</span>
                </a>
                <p className="form-note">
                  ⚠️ Form yeni sekmede açılacaktır
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;