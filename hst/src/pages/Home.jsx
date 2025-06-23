import React, { useState } from 'react';
import TopTabs from '../components/TopTabs';
import MyReservations from './MyReservations';
import Notifications from './Notification';
import '../Style/Home.css';
import Materials from '../components/MaterialItem';
export default function Home() {
  const [topTab, setTopTab] = useState("Materials");

  const renderTopContent = () => {
    if (topTab === 'Materials') {
       return <Materials />; 
  

    }
    if (topTab === 'notifications') {
      return <Notifications />; 
    }
    if (topTab === 'reservations') {
      return <MyReservations />; 
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
