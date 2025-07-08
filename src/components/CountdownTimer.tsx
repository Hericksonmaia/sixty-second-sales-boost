
import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center space-x-4 my-6">
      <div className="text-center">
        <div className="bg-brand-dark text-white text-2xl md:text-3xl font-bold px-4 py-3 rounded-lg min-w-[70px] animate-countdown">
          {String(timeLeft.hours).padStart(2, '0')}
        </div>
        <div className="text-sm mt-1 text-gray-600 font-semibold">HORAS</div>
      </div>
      <div className="text-center">
        <div className="bg-brand-dark text-white text-2xl md:text-3xl font-bold px-4 py-3 rounded-lg min-w-[70px] animate-countdown">
          {String(timeLeft.minutes).padStart(2, '0')}
        </div>
        <div className="text-sm mt-1 text-gray-600 font-semibold">MINUTOS</div>
      </div>
      <div className="text-center">
        <div className="bg-brand-dark text-white text-2xl md:text-3xl font-bold px-4 py-3 rounded-lg min-w-[70px] animate-countdown">
          {String(timeLeft.seconds).padStart(2, '0')}
        </div>
        <div className="text-sm mt-1 text-gray-600 font-semibold">SEGUNDOS</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
