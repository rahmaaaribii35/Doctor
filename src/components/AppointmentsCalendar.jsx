import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, User, FileText } from 'lucide-react';

const AppointmentsCalendar = ({ appointments = [] }) => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [viewMode, setViewMode] = useState('upcoming'); // 'upcoming', 'completed', 'all'

  // Filtrer les rendez-vous selon le mode
  const filteredAppointments = appointments.filter(apt => {
    if (viewMode === 'upcoming') return apt.status === 'upcoming';
    if (viewMode === 'completed') return apt.status === 'completed';
    return true;
  });

  // Grouper les rendez-vous par date
  const appointmentsByDate = filteredAppointments.reduce((acc, apt) => {
    if (!acc[apt.date]) {
      acc[apt.date] = [];
    }
    acc[apt.date].push(apt);
    return acc;
  }, {});

  // Trier les dates
  const sortedDates = Object.keys(appointmentsByDate).sort();

  // Obtenir les rendez-vous du jour sélectionné
  const selectedDayAppointments = appointmentsByDate[selectedDate] || [];

  // Obtenir la date actuelle
  const today = new Date().toISOString().split('T')[0];

  // Compter les rendez-vous
  const upcomingCount = appointments.filter(apt => apt.status === 'upcoming').length;
  const completedCount = appointments.filter(apt => apt.status === 'completed').length;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
          <CalendarIcon className="w-6 h-6 text-blue-600" />
          Calendrier des Rendez-vous
        </h2>
      </div>

      {/* Filtres */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setViewMode('all')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            viewMode === 'all'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Tous ({appointments.length})
        </button>
        <button
          onClick={() => setViewMode('upcoming')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            viewMode === 'upcoming'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          À venir ({upcomingCount})
        </button>
        <button
          onClick={() => setViewMode('completed')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            viewMode === 'completed'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Terminés ({completedCount})
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Liste des rendez-vous par date */}
        <div className="lg:col-span-2">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Rendez-vous par date</h3>
          <div className="space-y-4 max-h-[600px] overflow-y-auto">
            {sortedDates.length === 0 ? (
              <p className="text-gray-500 text-center py-8">Aucun rendez-vous trouvé.</p>
            ) : (
              sortedDates.map(date => {
                const dayAppointments = appointmentsByDate[date];
                const isPast = date < today;
                const isToday = date === today;

                return (
                  <div key={date} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className={`font-semibold ${
                        isToday ? 'text-blue-600' : isPast ? 'text-gray-500' : 'text-gray-900'
                      }`}>
                        {new Date(date).toLocaleDateString('fr-FR', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                        {isToday && <span className="ml-2 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">Aujourd'hui</span>}
                      </h4>
                    </div>
                    <div className="space-y-3">
                      {dayAppointments.map(apt => (
                        <div
                          key={apt.id}
                          className={`p-3 rounded-lg border-l-4 ${
                            apt.status === 'completed'
                              ? 'bg-gray-50 border-gray-400'
                              : 'bg-blue-50 border-blue-500'
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <Clock className="w-4 h-4 text-gray-600" />
                                <span className="font-medium text-gray-900">{apt.time}</span>
                                <span className={`px-2 py-1 text-xs rounded ${
                                  apt.status === 'completed'
                                    ? 'bg-gray-200 text-gray-700'
                                    : 'bg-blue-200 text-blue-700'
                                }`}>
                                  {apt.status === 'completed' ? 'Terminé' : 'À venir'}
                                </span>
                              </div>
                              <div className="flex items-center gap-2 mb-1">
                                <User className="w-4 h-4 text-gray-600" />
                                <span className="text-gray-900 font-medium">{apt.patientName}</span>
                              </div>
                              <div className="text-sm text-gray-600 mb-1">
                                <span className="font-medium">Docteur:</span> {apt.doctorName}
                              </div>
                              <div className="text-sm text-gray-600 mb-1">
                                <span className="font-medium">Type:</span> {apt.type}
                              </div>
                              {apt.notes && (
                                <div className="flex items-start gap-2 mt-2">
                                  <FileText className="w-4 h-4 text-gray-600 mt-0.5" />
                                  <span className="text-sm text-gray-600">{apt.notes}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Calendrier mensuel */}
        <div className="lg:col-span-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Sélectionner une date</h3>
          <div className="border border-gray-200 rounded-lg p-4">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
            />
            
            {selectedDayAppointments.length > 0 ? (
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  Rendez-vous du {new Date(selectedDate).toLocaleDateString('fr-FR')}
                </h4>
                <div className="space-y-2">
                  {selectedDayAppointments.map(apt => (
                    <div
                      key={apt.id}
                      className={`p-3 rounded-lg border-l-4 ${
                        apt.status === 'completed'
                          ? 'bg-gray-50 border-gray-400'
                          : 'bg-blue-50 border-blue-500'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="w-4 h-4 text-gray-600" />
                        <span className="font-medium">{apt.time}</span>
                      </div>
                      <div className="text-sm font-medium text-gray-900">{apt.patientName}</div>
                      <div className="text-xs text-gray-600">{apt.doctorName}</div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-gray-500 text-center py-4">
                Aucun rendez-vous pour cette date
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentsCalendar;