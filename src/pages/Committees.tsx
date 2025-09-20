import React from 'react';
import { Link } from 'react-router-dom';
import { COMMITTEES } from '../utils/constants';
import './Committees.css';

const Committees: React.FC = () => {
  return (
    <div className="committees-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Komiteler</h1>
          <p className="page-subtitle">
            11 farklı alanda derinlemesine tartışma ve öğrenme fırsatı
          </p>
        </div>

        <div className="committees-grid">
          {COMMITTEES.map((committee) => (
            <Link 
              key={committee.id} 
              to={`/komiteler/${committee.id}`}
              className="committee-card-link"
            >
              <div className="committee-card">
                <div className="committee-icon">{committee.icon}</div>
                <h3 className="committee-name">{committee.name}</h3>
                <p className="committee-description">{committee.description}</p>
                <div className="committee-footer">
                  <span className="committee-badge">Komite</span>
                  <span className="click-hint">Detaylar için tıklayın →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Committees;
