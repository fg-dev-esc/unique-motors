import { useState, useEffect } from 'react';

export const useAuctionProgressBar = (fechaFin) => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    if (!fechaFin) return;

    const interval = setInterval(() => {
      const end = new Date(fechaFin);
      const now = new Date();
      const diff = end - now;

      if (diff <= 0) {
        setTimeLeft(0);
        setIsActive(false);
        setPercentage(0);
        setShouldShow(false);
        return;
      }

      const totalSeconds = Math.floor(diff / 1000);
      const totalMinutes = Math.floor(totalSeconds / 60);
      
      if (totalMinutes <= 15) {
        setShouldShow(true);
        setIsActive(true);
        setTimeLeft(totalSeconds);
        
        const maxSeconds = 15 * 60;
        const newPercentage = (totalSeconds / maxSeconds) * 100;
        setPercentage(Math.min(newPercentage, 100));
      } else {
        setShouldShow(false);
        setIsActive(false);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [fechaFin]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getProgressColor = () => {
    if (percentage > 50) return 'bg-success';
    if (percentage > 25) return 'bg-warning';
    return 'bg-danger';
  };

  const getProgressText = () => {
    if (timeLeft <= 0) return 'Tiempo terminado';
    return `${formatTime(timeLeft)} restante`;
  };

  return {
    timeLeft,
    percentage,
    isActive,
    shouldShow,
    formatTime: () => formatTime(timeLeft),
    getProgressColor,
    getProgressText
  };
};