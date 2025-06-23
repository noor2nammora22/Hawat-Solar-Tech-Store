import React from 'react';
import '../Style/TopTabs.css';
import Materials from '../components/MaterialItem';

export default function TopTabs({ topTab, setTopTab }) {
  return (
    <div className="topTabs">
      <button
        className={topTab === 'reservations' ? "activeTopButton" : "topButton"}
        onClick={() => setTopTab('reservations')}
      >
        الحجوزات
      </button>
      <button
        className={topTab === 'notifications' ? "activeTopButton" : "topButton"}
        onClick={() => setTopTab('notifications')}
      >
        الإشعارات
      </button>
      <button
        className={topTab === 'Materials' ? "activeTopButton" : "topButton"}
        onClick={() => setTopTab('Materials')}
      >
        المواد
      </button>
    </div>
  );
}
