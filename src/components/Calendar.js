// components/Calendar.js
import React, { useState, useEffect } from 'react';
import './Calendar.css';

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [days, setDays] = useState([]);
  const [months, setMonths] = useState([
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]);

  useEffect(() => {
    const daysInMonth = [];
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    for (let i = 0; i < firstDay.getDay(); i++) {
      daysInMonth.push('');
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
      daysInMonth.push(i);
    }

    for (let i = daysInMonth.length; i < 42; i++) {
      daysInMonth.push('');
    }

    setDays(daysInMonth);
  }, [date]);

  const handlePrevMonth = () => {
    if (date.getMonth() === 0) {
      setDate(new Date(date.getFullYear() - 1, 11, 1));
    } else {
      setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
    }
  };

  const handleNextMonth = () => {
    if (date.getMonth() === 11) {
      setDate(new Date(date.getFullYear() + 1, 0, 1));
    } else {
      setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
    }
  };

  const handlePrevYear = () => {
    setDate(new Date(date.getFullYear() - 1, date.getMonth(), 1));
  };

  const handleNextYear = () => {
    setDate(new Date(date.getFullYear() + 1, date.getMonth(), 1));
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={handlePrevYear}>Prev Year</button>
        <button onClick={handlePrevMonth}>Prev Month</button>
        <span>{months[date.getMonth()]} {date.getFullYear()}</span>
        <button onClick={handleNextMonth}>Next Month</button>
        <button onClick={handleNextYear}>Next Year</button>
      </div>
      <div className="calendar-body">
        <div className="days-of-week">
          <span>Sun</span>
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
        </div>
        <div className="days">
          {days.map((day, index) => (
            <span key={index}>{day}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;