import React from 'react';
import '../Style/History.css';

const mockHistory = [
  { id: 1, action: "تم حجز 5 بطاريات من قبل المتجر 1 " , date: "2025-06-17" },
  { id: 2, action: "تم تعديل الكمية المحجوزة من قبل المتجر 5", date: "2025-06-16" },
  { id: 3, action: "تم إضافة ألواح جديدة", date: "2025-06-15" }
];

export default function History() {
  return (
    <div className="historyContainer">
      <h2>السجل</h2>
      {mockHistory.map(entry => (
        <div key={entry.id} className="historyItem">
          <div className="historyAction">{entry.action}</div>
          <div className="historyDate">{entry.date}</div>
        </div>
      ))}
    </div>
  );
}
