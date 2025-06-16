import React from 'react';
import './MaterialItem.css';

export default function MaterialItem({ name }) {
  return (
    <div className="materialItem">
      <span>{name}</span>
      <button className="detailsButton">التفاصيل</button>
    </div>
  );
}
