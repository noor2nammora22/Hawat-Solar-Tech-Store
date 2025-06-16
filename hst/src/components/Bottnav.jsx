import React from 'react';
import './Bottnav.css';
import { FaHome, FaSearch, FaClipboardList, FaHistory, FaUser } from "react-icons/fa";

export default function Bottnav({ bottomTab, setBottomTab }) {
  return (
    <div className="navbar">
      <button className={bottomTab === 'home' ? "activeTab" : "navButton"} onClick={() => setBottomTab("home")}>
        <FaHome /> <div>الرئيسية</div>
      </button>
      <button className={bottomTab === 'search' ? "activeTab" : "navButton"} onClick={() => setBottomTab("search")}>
        <FaSearch /> <div>بحث</div>
      </button>
      <button className={bottomTab === 'myReservations' ? "activeTab" : "navButton"} onClick={() => setBottomTab("myReservations")}>
        <FaClipboardList /> <div>حجوزاتي</div>
      </button>
      <button className={bottomTab === 'history' ? "activeTab" : "navButton"} onClick={() => setBottomTab("history")}>
        <FaHistory /> <div>السجل</div>
      </button>
      <button className={bottomTab === 'profile' ? "activeTab" : "navButton"} onClick={() => setBottomTab("profile")}>
        <FaUser /> <div>الحساب</div>
      </button>
    </div>
  );
}
