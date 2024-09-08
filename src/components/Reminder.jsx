import React, { useState } from 'react';

export default function Reminder() {
  const [reminders, setReminders] = useState([]);
  const [newReminder, setNewReminder] = useState("");

  const addReminder = () => {
    if (newReminder) {
      setReminders([...reminders, newReminder]);
      setNewReminder("");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Medicine Reminders</h1>
      <div className="mb-4">
        <input 
          type="text" 
          value={newReminder} 
          onChange={(e) => setNewReminder(e.target.value)}
          className="border p-2 rounded w-full"
          placeholder="Enter a new reminder"
        />
        <button 
          onClick={addReminder}
          className="bg-blue-500 text-white p-2 rounded mt-2"
        >
          Add Reminder
        </button>
      </div>
      <ul className="list-disc pl-5">
        {reminders.map((reminder, index) => (
          <li key={index} className="mb-2">{reminder}</li>
        ))}
      </ul>
    </div>
  );
}
