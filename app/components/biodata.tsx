// Client Component (misalnya PersonalInfo.tsx)
'use client'; // menambahkan direktif ini menjadikan komponen ini sebagai komponen klien

import React from 'react';
import './personalinfo.css';

// Define the structure of MyInfos object using TypeScript interface
interface MyInfos {
  ttl: string;
  gender: string;
  tinggiBadan: number;
  beratBadan: number;
  statusPernikahan: string;
  whatsapp: string;
  email: string;
}

const myInfo: MyInfos = {
  ttl: "Bandung, 25 April 2004",
  gender: "Perempuan",
  tinggiBadan: 153,
  beratBadan: 49,
  statusPernikahan: "Belum Menikah",
  whatsapp: "085795840331",
  email: "rahmamaulidina25@gmail.com",
};

const PersonalInfo: React.FC = () => {
  return (
    <section className="personal-info">
      <h2>Personal Info</h2>
      <ul>
        <li><strong>Tempat, Tanggal Lahir:</strong> {myInfo.ttl}</li>
        <li><strong>Gender:</strong> {myInfo.gender}</li>
        <li><strong>Tinggi Badan:</strong> {myInfo.tinggiBadan} cm</li>
        <li><strong>Berat Badan:</strong> {myInfo.beratBadan} kg</li>
        <li><strong>Status Pernikahan:</strong> {myInfo.statusPernikahan}</li>
        <li><strong>Whatsapp:</strong> {myInfo.whatsapp}</li>
        <li><strong>Email:</strong> {myInfo.email}</li>
      </ul>
    </section>
  );
}

export default PersonalInfo;