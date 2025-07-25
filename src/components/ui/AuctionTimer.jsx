import { useState, useEffect } from 'react';

export const AuctionTimer = ({ endDate, className = "", displayMode = "badge" }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false
  });

  // Debug logging (remove in production)
  useEffect(() => {
    console.log('AuctionTimer initialized with endDate:', endDate);
  }, [endDate]);

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Validate endDate
      if (!endDate) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true
        });
        return;
      }

      const now = new Date().getTime();
      const targetDate = new Date(endDate).getTime();
      
      // Check if date is valid
      if (isNaN(targetDate)) {
        console.warn('Invalid date provided to AuctionTimer:', endDate);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true
        });
        return;
      }

      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isExpired: false
      });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  const formatTime = (time) => {
    return time.toString().padStart(2, '0');
  };

  const getDisplayTime = () => {
    if (timeLeft.isExpired) {
      return null; // No mostrar nada si está expirada
    }

    if (timeLeft.days > 0) {
      return `${timeLeft.days}d ${formatTime(timeLeft.hours)}:${formatTime(timeLeft.minutes)}:${formatTime(timeLeft.seconds)}`;
    } else {
      return `${formatTime(timeLeft.hours)}:${formatTime(timeLeft.minutes)}:${formatTime(timeLeft.seconds)}`;
    }
  };

  const getBadgeClass = () => {
    return 'bg-warning text-dark'; // Amarillo con texto oscuro para mejor legibilidad
  };

  const getIcon = () => {
    return <i className="far fa-clock me-1"></i>; // Siempre icono de reloj
  };

  // No renderizar nada si la subasta ha terminado
  if (timeLeft.isExpired || !getDisplayTime()) {
    return null;
  }

  // Modo inline (sin badge)
  if (displayMode === "inline") {
    return (
      <span className={`auction-timer-inline ${className}`} style={{ fontSize: '0.85rem' }}>
         <i className="far fa-clock me-1"></i>
        {getDisplayTime()}
      </span>
    );
  }

  // Modo time-only (solo tiempo, sin texto prefijo)
  if (displayMode === "time-only") {
    return (
      <span className={`auction-timer-time-only ${className}`} style={{ fontSize: '0.85rem' }}>
        <i className="far fa-clock me-1"></i>
        {getDisplayTime()}
      </span>
    );
  }

  // Modo value-only (solo el valor del tiempo, sin ícono ni texto)
  if (displayMode === "value-only") {
    return (
      <span className={`auction-timer-value-only ${className}`} style={{ fontSize: '0.85rem' }}>
        {getDisplayTime()}
      </span>
    );
  }

  // Modo badge (original)
  return (
    <div className={`auction-timer-badge position-absolute ${className}`} 
         style={{
           top: '15px',
           right: '15px',
           zIndex: 2
         }}>
      <span className={`badge ${getBadgeClass()}`}>
        {getIcon()}
        {getDisplayTime()}
      </span>
    </div>
  );
};

export default AuctionTimer;