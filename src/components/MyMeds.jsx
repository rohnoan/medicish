import React, { useState } from 'react';
import MedBar from './MedBar';
import add from './add.png';

export default function MyMeds() {
  const [medications, setMedications] = useState([
    { name: 'azee', dosage: '10mg', date: '04-08-2024', time: '17:35' },
    { name: 'dolo', dosage: '650mg', date: '04-08-2024', time: '18:35' },
    { name: 'paracetamol', dosage: '1000mg', date: '04-08-2024', time: '20:35' },
    { name: 'ibuprofen', dosage: '200mg', date: '04-08-2024', time: '21:35' }
  ]);

  const [newMed, setNewMed] = useState({ name: '', dosage: '', date: '', time: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMed(prev => ({ ...prev, [name]: value }));
  };

  const handleAddMed = () => {
    setMedications(prev => [...prev, newMed]);
    setNewMed({ name: '', dosage: '', date: '', time: '' }); // Clear form
  };

  return (
    <div className='meds'>
      <div className='search-bar'>
        <input
          type="text"
          name="name"
          placeholder='Medication Name'
          value={newMed.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="dosage"
          placeholder='Dosage'
          value={newMed.dosage}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          value={newMed.date}
          onChange={handleChange}
        />
        <input
          type="time"
          name="time"
          value={newMed.time}
          onChange={handleChange}
        />
        <button onClick={handleAddMed}>
          <img className='w-[120px] h-[40px] border-none' src={add} alt="Add Medication" />
        </button>
      </div>
      <ul className='medication-list'>
        {medications.map((med, index) => (
          <li key={index} className='medication-item'>
            <MedBar
              name={med.name}
              dosage={med.dosage}
              date={med.date}
              time={med.time}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
