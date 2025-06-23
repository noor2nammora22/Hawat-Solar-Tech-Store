import React, { useState } from 'react';
import Bottnav from './components/Bottnav';
import Home from './pages/Home';
import Search from './pages/Search';
import MyReservations from './pages/MyReservations';
import History from './pages/History';
import Profile from './pages/Profile';

export default function App() {
  const [bottomTab, setBottomTab] = useState("home");

  const renderBottomContent = () => {
    switch (bottomTab) {
      
      case 'search': return <Search />;
      case 'myReservations': return <MyReservations />;
      case 'home': return <Home />;
      case 'history': return <History />;
      case 'profile': return <Profile />;
      default: return null;
    }
  };

  return (
    <div style={styles.appContainer}>
      <div style={styles.phoneContainer}>
        {renderBottomContent()}
        <Bottnav bottomTab={bottomTab} setBottomTab={setBottomTab} />
      </div>
    </div>
  );
}

const styles = {
  appContainer: {
    backgroundColor: '#eee',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  phoneContainer: {
    width: '375px',
    height: '700px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0,0,0,0.2)',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  }
};
