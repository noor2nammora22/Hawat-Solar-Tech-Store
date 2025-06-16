import React, { useState } from 'react';
import './Search.css';

export default function Search() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [user, setUser] = useState('');
  const [material, setMaterial] = useState('');

  const handleSearch = () => {
    console.log("فلترة حسب: ", { startDate, endDate, user, material });
    // هون مستقبلاً بتجيب النتائج من قاعدة بيانات أو API
  }

  return (
    <div className="searchContainer">
      <h2>البحث المتقدم</h2>

      <div className="filterGroup">
        <label>من تاريخ:</label>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      </div>

      <div className="filterGroup">
        <label>إلى تاريخ:</label>
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </div>

      <div className="filterGroup">
        <label>المستخدم:</label>
        <select value={user} onChange={(e) => setUser(e.target.value)}>
          <option value="">اختر المستخدم</option>
          <option value="نور">نور</option>
          <option value="محمد">محمد</option>
          <option value="خالد">خالد</option>
        </select>
      </div>

      <div className="filterGroup">
        <label>المادة:</label>
        <select value={material} onChange={(e) => setMaterial(e.target.value)}>
          <option value="">اختر المادة</option>
          <option value="ألواح">ألواح</option>
          <option value="بطاريات">بطاريات</option>
          <option value="كبلات">كبلات</option>
          <option value="شرائط">شرائط</option>
        </select>
      </div>

      <button className="searchButton" onClick={handleSearch}>بحث</button>
    </div>
  );
}
