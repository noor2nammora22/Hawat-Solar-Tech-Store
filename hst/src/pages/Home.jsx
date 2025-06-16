import React, { useState } from 'react';
import TopTabs from '../components/TopTabs';
import MaterialItem from '../components/MaterialItem';
import './Home.css';

export default function Home() {
  const [topTab, setTopTab] = useState("materials");

  const renderTopContent = () => {
    if (topTab === 'materials') {
      return (
        <>
          <h3>المواد</h3>
          <MaterialItem name="البطاريات" />
          <MaterialItem name="الألواح" />
          <MaterialItem name="الكبلات" />
          <MaterialItem name="الشرائط" />
          <button className="addButton">إضافة</button>
        </>
      );
    }
    if (topTab === 'notifications') {
      return <h3>لا يوجد إشعارات حالياً</h3>;
    }
    if (topTab === 'reservations') {
      return <h3>لا يوجد حجوزات حالياً</h3>;
    }
  };

  return (
    <>
      <div className="header"><h2>HST</h2></div>
      <TopTabs topTab={topTab} setTopTab={setTopTab} />
      <div className="content">{renderTopContent()}</div>
    </>
  );
}
