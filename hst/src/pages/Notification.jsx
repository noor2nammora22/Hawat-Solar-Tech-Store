import React from 'react';
import './Notification.css';

export default function Notifications() {

  const notifications = [
    { id: 1, text: "تم حجز 200 لوح طاقة من النوع 170", isNew: true },
    { id: 2, text: "تم إضافة 10 كبلات من النوع Y", isNew: true },
    { id: 3, text: "تم حجز 100 لوح طاقة من النوع 150", isNew: false },
    { id: 4, text: "تم إضافة 5 كبلات من النوع X", isNew: false },
  ];

  return (
    <div className="notificationsContainer">
      <h2>الإشعارات</h2>
      <div className="notificationsList">
        {notifications.map((notif) => (
          <div key={notif.id} className={`notificationItem ${notif.isNew ? 'new' : 'read'}`}>
            {notif.isNew && <div className="blueDot"></div>}
            <span>{notif.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
