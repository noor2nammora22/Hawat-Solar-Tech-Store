import React from 'react';
import './TopTabs.css';

export default function TopTabs({ topTab, setTopTab }) {
  return (
    <div className="topTabs">
      <button className={topTab === 'materials' ? "activeTopButton" : "topButton"} onClick={() => setTopTab('materials')}>المواد</button>
      <button className={topTab === 'notifications' ? "activeTopButton" : "topButton"} onClick={() => setTopTab('notifications')}>الإشعارات</button>
      <button className={topTab === 'reservations' ? "activeTopButton" : "topButton"} onClick={() => setTopTab('reservations')}>الحجوزات</button>
    </div>
  );
}
