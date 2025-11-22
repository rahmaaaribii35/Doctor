// Hedha fichier mta3 données mta3 rendez-vous (appointments)
// Kol rendez-vous fih: id, patient, docteur, date, heure, statut, type, w notes

export const appointments = [
  {
    id: 'apt1', // ID unique mta3 rendez-vous
    patientId: 'pat1', // ID mta3 patient
    patientName: 'John Miller', // Ism patient
    doctorName: 'Dr. Sarah Johnson', // Ism docteur
    date: '2024-12-20', // Date mta3 rendez-vous
    time: '10:00', // Heure mta3 rendez-vous
    status: 'upcoming', // Statut: 'upcoming' (jey) wala 'completed' (kamel)
    type: 'Consultation', // Type mta3 rendez-vous (Consultation, Follow-up, Examination, etc.)
    notes: 'Routine checkup' // Notes wala commentaires
  },
  {
    id: 'apt2',
    patientId: 'pat2',
    patientName: 'Emma Johnson',
    doctorName: 'Dr. Michael Brown',
    date: '2024-12-18',
    time: '14:30',
    status: 'completed',
    type: 'Follow-up',
    notes: 'Post-surgery check'
  },
  {
    id: 'apt3',
    patientId: 'pat3',
    patientName: 'Michael Brown',
    doctorName: 'Dr. Sarah Johnson',
    date: '2024-12-22',
    time: '09:00',
    status: 'upcoming',
    type: 'Consultation',
    notes: 'Diabetes monitoring'
  },
  {
    id: 'apt4',
    patientId: 'pat4',
    patientName: 'Sophia Wilson',
    doctorName: 'Dr. Emily Davis',
    date: '2024-12-15',
    time: '11:00',
    status: 'completed',
    type: 'Examination',
    notes: 'Asthma check'
  },
  {
    id: 'apt5',
    patientId: 'pat5',
    patientName: 'Daniel Anderson',
    doctorName: 'Dr. Michael Brown',
    date: '2024-12-25',
    time: '15:00',
    status: 'upcoming',
    type: 'Consultation',
    notes: 'Blood pressure check'
  },
  {
    id: 'apt6',
    patientId: 'pat6',
    patientName: 'Olivia Martinez',
    doctorName: 'Dr. Sarah Johnson',
    date: '2024-12-19',
    time: '16:00',
    status: 'upcoming',
    type: 'Follow-up',
    notes: 'General consultation'
  },
  {
    id: 'apt7',
    patientId: 'pat7',
    patientName: 'William Harris',
    doctorName: 'Dr. Emily Davis',
    date: '2024-12-14',
    time: '10:30',
    status: 'completed',
    type: 'Consultation',
    notes: 'Heart condition review'
  },
  {
    id: 'apt8',
    patientId: 'pat8',
    patientName: 'Ava Thompson',
    doctorName: 'Dr. Michael Brown',
    date: '2024-12-23',
    time: '13:00',
    status: 'upcoming',
    type: 'Examination',
    notes: 'Allergy test'
  }
];


