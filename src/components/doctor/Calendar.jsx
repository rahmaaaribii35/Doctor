// src/components/doctor/Calendar.jsx
import React, { useState } from 'react';
import CalendarComponent from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css'; // fichier CSS pour les jours colorés

const Calendar = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Rendez-vous exemple (plusieurs dans le mois)
  const appointments = {
    "2025-11-05": ["10:00 - Patient A", "11:00 - Patient B", "15:00 - Patient C"],
    "2025-11-10": ["09:00 - Patient D", "13:00 - Patient E", "16:00 - Patient F"],
    "2025-11-12": ["10:00 - Patient G", "14:00 - Patient H", "16:30 - Patient I"],
    "2025-11-15": ["09:30 - Patient J"],
    "2025-11-20": ["10:00 - Patient K", "12:00 - Patient L"],
    "2025-11-22": ["08:30 - Patient M", "11:00 - Patient N", "14:00 - Patient O"],
  };

  // formate la date en "YYYY-MM-DD"
  const formatDate = (date) => date.toISOString().split("T")[0];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Appointments Calendar</h2>

      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <p className="text-gray-600 mb-4">
          View all monthly appointments and consultation schedules.
        </p>

        {!showCalendar && (
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <p className="text-gray-500">Integrate your full calendar here</p>
            <button
              onClick={() => setShowCalendar(true)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              View Full Calendar
            </button>
          </div>
        )}

        {showCalendar && (
          <div className="mt-6">
            <CalendarComponent
              onChange={setSelectedDate}
              value={selectedDate}
              tileClassName={({ date, view }) => {
                if (view === 'month' && appointments[formatDate(date)]) {
                  return 'appointment-day';
                }
              }}
            />

            <div className="mt-6 bg-gray-100 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                Appointments on {selectedDate.toDateString()}:
              </h3>

              {appointments[formatDate(selectedDate)] ? (
                <ul className="list-disc ml-6">
                  {appointments[formatDate(selectedDate)].map((rdv, index) => (
                    <li key={index}>{rdv}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">No appointments for this date.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calendar;
