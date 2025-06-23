import React from 'react';
import '../Style/Profile.css';

export default function Profile() {
  const user = {
    name: "زَين",
    email: "zain@example.com",
    role: "مشرف"
  };

  return (
    <div className="profileContainer">
      <h2>الحساب الشخصي</h2>
      <div className="profileItem"><strong>الاسم:</strong> {user.name}</div>
      <div className="profileItem"><strong>البريد:</strong> {user.email}</div>
      <div className="profileItem"><strong>الدور:</strong> {user.role}</div>

    </div>
  );
}
