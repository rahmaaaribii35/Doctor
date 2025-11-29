// src/components/doctor/Calendar.jsx
import React, { useState } from 'react';
import CalendarComponent from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css'; // fichier CSS pour les jours colorés

const Calendar = ({doctor}) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  //les rdvyjiw ml doctor selectionné
  const appointments = doctor?.appointments || {};

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
