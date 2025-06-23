import React from 'react';
import '../Style/MaterialItem.css';

export default function Materials() {
  return (
    <div className="materialsContainer">
      <h3>المواد</h3>

      <div className="materialItem">
        <button className="detailsButton">تفاصيل</button>
        <span className="materialName">البطاريات</span>
       
      </div>

      <div className="materialItem">
       <button className="detailsButton">تفاصيل</button>
        <span className="materialName">الألواح</span>
       
      </div>

      <div className="materialItem">
        <button className="detailsButton">تفاصيل</button>
        <span className="materialName">الكبلات</span>
      </div>

      <div className="materialItem">
        <button className="detailsButton">تفاصيل</button>
        <span className="materialName">الشرائط</span>
      </div>

      <button className="addButton">إضافة</button>
    </div>
  );
}
