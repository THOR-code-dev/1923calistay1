import React, { useState, useEffect } from 'react';
import { APPLICATION_FEES } from '../../utils/constants';
import './CountdownTimer.css';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [currentPeriod, setCurrentPeriod] = useState<'normal' | 'late' | 'ended'>('normal');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const normalDeadline = new Date('2025-10-05T23:59:59').getTime();
      const lateDeadline = new Date('2025-10-12T23:59:59').getTime();

      let targetDate = normalDeadline;
      let period: 'normal' | 'late' | 'ended' = 'normal';

      if (now > lateDeadline) {
        period = 'ended';
        targetDate = lateDeadline;
      } else if (now > normalDeadline) {
        period = 'late';
        targetDate = lateDeadline;
      }

      setCurrentPeriod(period);

      if (period === 'ended') {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const getCurrentPeriodInfo = () => {
    switch (currentPeriod) {
      case 'normal':
        return {
          title: 'Normal Başvuru',
          price: APPLICATION_FEES.normal.price,
          color: 'warning',
          message: 'Normal başvuru dönemi devam ediyor! Bireysel: 600₺, Delegasyon: 550₺'
        };
      case 'late':
        return {
          title: 'Geç Başvuru',
          price: APPLICATION_FEES.late.price,
          color: 'danger',
          message: 'Son şans! Geç başvuru fiyatı: 800₺'
        };
      case 'ended':
        return {
          title: 'Başvurular Kapandı',
          price: 0,
          color: 'ended',
          message: 'Başvuru süresi sona erdi'
        };
    }
  };

  const periodInfo = getCurrentPeriodInfo();

  if (currentPeriod === 'ended') {
    return (
      <div className="countdown-container ended">
        <div className="countdown-card">
          <div className="countdown-header">
            <h3 className="countdown-title">Başvurular Kapandı</h3>
            <p className="countdown-message">Başvuru süresi sona erdi. Bizi takip etmeye devam edin!</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`countdown-container ${periodInfo.color}`}>
      <div className="countdown-card">
        <div className="countdown-header">
          <div className="countdown-badge">
            <span className="badge-icon">⚡</span>
            <span className="badge-text">{periodInfo.title}</span>
          </div>
          <h3 className="countdown-title">{periodInfo.price}₺</h3>
          <p className="countdown-message">{periodInfo.message}</p>
        </div>
        
        <div className="countdown-timer">
          <div className="time-unit">
            <span className="time-number">{timeLeft.days}</span>
            <span className="time-label">Gün</span>
          </div>
          <div className="time-separator">:</div>
          <div className="time-unit">
            <span className="time-number">{timeLeft.hours}</span>
            <span className="time-label">Saat</span>
          </div>
          <div className="time-separator">:</div>
          <div className="time-unit">
            <span className="time-number">{timeLeft.minutes}</span>
            <span className="time-label">Dakika</span>
          </div>
          <div className="time-separator">:</div>
          <div className="time-unit">
            <span className="time-number">{timeLeft.seconds}</span>
            <span className="time-label">Saniye</span>
          </div>
        </div>

        <div className="countdown-progress">
          <div className="progress-bar">
            <div className={`progress-fill ${periodInfo.color}`}></div>
          </div>
          <p className="progress-text">Dönem Sonuna Kadar</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;