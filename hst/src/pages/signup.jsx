import React, { useState } from 'react';
import '../Style/Auth.css';

export default function SignUp({ onSwitch }) {
  const [form, setForm] = useState({ email: '', name: '', password: '', confirm: '' });

  return (
    <div className="authContainer">
      <h2>إنشاء حساب</h2>
      <input type="email" placeholder="الإيميل" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
      <input placeholder="الاسم" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
      <input type="password" placeholder="كلمة السر" value={form.password} onChange={e => setForm({...form, password: e.target.value})} />
      <input type="password" placeholder="تأكيد كلمة السر" value={form.confirm} onChange={e => setForm({...form, confirm: e.target.value})} />
      <button className="authButton">تسجيل</button>
      <p className="switchText">
        عندك حساب؟ <span onClick={() => onSwitch('login')}>سجّل الدخول</span>
      </p>
    </div>
  );
}
