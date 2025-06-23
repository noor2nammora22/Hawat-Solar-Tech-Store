import React, { useState } from 'react';
import '../Style/search.css'
export default function Search() {
  const [dates, setDates] = useState({ from: '', to: '' });
  const [user, setUser] = useState('');
  const [material, setMaterial] = useState('');

  const handleSearch = () => {
    console.log("فلترة حسب:", { ...dates, user, material });
  };

  return (
    <div className="searchContainer">
      <h2>البحث المتقدم</h2>

      <div className="filterGroup">
        <label>من تاريخ:</label>
        <input type="date" value={dates.from} onChange={e => setDates({...dates, from: e.target.value})} />
      </div>

      <div className="filterGroup">
        <label>إلى تاريخ:</label>
        <input type="date" value={dates.to} onChange={e => setDates({...dates, to: e.target.value})} />
      </div>

      <div className="filterGroup">
        <label>المستخدم:</label>
        <select value={user} onChange={e => setUser(e.target.value)}>
          <option>اختر المستخدم</option>
          <option>نور</option>
          <option>محمد</option>
          <option>خالد</option>
        </select>
      </div>

      <div className="filterGroup">
        <label>المادة:</label>
        <select value={material} onChange={e => setMaterial(e.target.value)}>
          <option>اختر المادة</option>
          <option>ألواح</option>
          <option>بطاريات</option>
          <option>كبلات</option>
          <option>شرائط</option>
        </select>
      </div>

      <div className="buttonsRow">
        <button className="btn cancel">إلغاء</button>
        <button className="btn search" onClick={handleSearch}>بحث</button>
      </div>
    </div>
  );
}
