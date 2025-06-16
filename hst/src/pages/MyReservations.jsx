import React, { useState } from 'react';
import './MyReservations.css';
import { FaTrash, FaCheckCircle } from 'react-icons/fa';

export default function MyReservations() {
  const [reservations, setReservations] = useState([
    { id: 1, material: "ألواح 170", quantity: 200, received: false },
    { id: 2, material: "كبلات Y", quantity: 50, received: true },
    { id: 3, material: "بطاريات", quantity: 20, received: false }
  ]);

  const toggleReceived = (id) => {
    setReservations(prev =>
      prev.map(item =>
        item.id === id ? { ...item, received: !item.received } : item
      )
    );
  };

  const deleteReservation = (id) => {
    setReservations(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="reservationsContainer">
      <h2>الحجوزات</h2>
      <div className="reservationsList">
        {reservations.map(res => (
          <div key={res.id} className="reservationItem">
            <div>
              <h4>{res.material}</h4>
              <p>الكمية: {res.quantity}</p>
            </div>
            <div className="actions">
              <FaCheckCircle 
                onClick={() => toggleReceived(res.id)} 
                color={res.received ? 'green' : 'gray'} 
                size={24} 
              />
              <FaTrash 
                onClick={() => deleteReservation(res.id)} 
                color="red" 
                size={24} 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
