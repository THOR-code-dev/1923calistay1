import React from 'react';
import { COMMITTEES } from '../utils/constants';
import './Committees.css';

const Committees: React.FC = () => {
  return (
    <div className="committees-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Komiteler</h1>
          <p className="page-subtitle">
            10 farklı alanda derinlemesine tartışma ve öğrenme fırsatı
          </p>
        </div>

        <div className="committees-grid">
          {COMMITTEES.map((committee) => (
            <div key={committee.id} className="committee-card">
              <div className="committee-icon">{committee.icon}</div>
              <h3 className="committee-name">{committee.name}</h3>
              <p className="committee-description">{committee.description}</p>
              <div className="committee-footer">
                <span className="committee-badge">Komite</span>
              </div>
            </div>
          ))}
        </div>

        <div className="committees-info">
          <div className="info-card">
            <h3>Komite Seçimi Nasıl Yapılır?</h3>
            <ul>
              <li>Başvuru formunda ilgi alanınıza göre 3 komite seçebilirsiniz</li>
              <li>Komite seçiminizi yaparken kişisel ilginizi ve hedeflerinizi göz önünde bulundurun</li>
              <li>Her komitede maksimum 15 katılımcı bulunacaktır</li>
              <li>Komite atamaları başvuru sırasına ve uygunluğa göre yapılacaktır</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Committees;
