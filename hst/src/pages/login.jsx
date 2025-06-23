import React, { useState } from 'react';
import '../Style/Auth.css';

export default function Login({ onSwitch }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="authContainer">
      <h2>تسجيل الدخول</h2>
      <input type="email" placeholder="الإيميل" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="كلمة السر" value={password} onChange={e => setPassword(e.target.value)} />
      <button className="authButton">دخول</button>
      <p className="switchText">
        ما عندك حساب؟ <span onClick={() => onSwitch('signup')}>سجّل الآن</span>
      </p>
    </div>
  );
}
