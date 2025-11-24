import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

import Headerlistepatient from '../components/Headerlistepatient';
import Tabs from '../components/Tabs';

const PatientDetail = () => {
    const { patientId } = useParams();
    const navigate = useNavigate();
    const { patients } = useContext(AppContext);

    const patient = patients.find(p => p._id === patientId);

    const [isEditing, setIsEditing] = useState(false);
    const [patientData, setPatientData] = useState(patient || {});
    const [newNote, setNewNote] = useState({
        date: new Date().toISOString().split('T')[0],
        type: 'consultation',
        content: '',
        doctor: ''
    });
    const [notes, setNotes] = useState(patientData.notes || []);

    if (!patient) {
        return (
            <div className="flex h-screen bg-blue-50">

                <div className="flex-1 flex flex-col">
                    <Headerlistepatient />
                    <Tabs />
                    <div className="flex-1 bg-white flex items-center justify-center">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Patient non trouvé</h2>
                            <button
                                onClick={() => navigate('/patients-overview')}
                                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                            >
                                Retour à la liste
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPatientData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setPatientData(prev => ({
            ...prev,
            address: {
                ...prev.address,
                [name]: value
            }
        }));
    };

    const handleAddNote = (e) => {
        e.preventDefault();
        if (newNote.content.trim()) {
            const note = {
                id: Date.now(),
                ...newNote,
                createdAt: new Date().toISOString()
            };
            setNotes(prev => [...prev, note]);
            setNewNote({
                date: new Date().toISOString().split('T')[0],
                type: 'consultation',
                content: '',
                doctor: ''
            });
        }
    };

    const handleDeleteNote = (noteId) => {
        setNotes(prev => prev.filter(note => note.id !== noteId));
    };

    const handleSave = () => {
        // Ici vous pouvez sauvegarder les modifications dans le contexte ou une API
        const updatedPatient = {
            ...patientData,
            notes: notes
        };
        console.log('Patient mis à jour:', updatedPatient);
        setIsEditing(false);
        // TODO: Mettre à jour le contexte ou appeler une API
    };

    return (
        <div className="flex h-screen bg-blue-50">


            <div className="flex-1 flex flex-col">
                <Headerlistepatient />
                <Tabs />

                <div className="flex-1 bg-white px-8 py-6 overflow-auto">
                    <div className="max-w-7xl mx-auto">
                        {/* Header */}
                        <div className="mb-6">
                            <button
                                onClick={() => navigate('/patients-overview')}
                                className="text-blue-600 hover:text-blue-800 mb-4 flex items-center gap-2"
                            >
                                <span>←</span> Retour à la liste
                            </button>
                            <div className="flex justify-between items-center">
                                <h1 className="text-3xl font-bold text-gray-900">Détails du Patient</h1>
                                <button
                                    onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                                    className={`px-6 py-2 rounded-lg font-medium ${isEditing
                                        ? 'bg-green-600 text-white hover:bg-green-700'
                                        : 'bg-blue-600 text-white hover:bg-blue-700'
                                        }`}
                                >
                                    {isEditing ? 'Enregistrer' : 'Modifier'}
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Colonne gauche - Informations principales */}
                            <div className="lg:col-span-2 space-y-6">
                                {/* Carte Informations Personnelles */}
                                <div className="bg-white rounded-xl shadow-sm p-6">
                                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Informations Personnelles</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={patientData.name || ''}
                                                    onChange={handleInputChange}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                            ) : (
                                                <p className="text-gray-900">{patientData.name}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Âge</label>
                                            {isEditing ? (
                                                <input
                                                    type="number"
                                                    name="age"
                                                    value={patientData.age || ''}
                                                    onChange={handleInputChange}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                            ) : (
                                                <p className="text-gray-900">{patientData.age} ans</p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Genre</label>
                                            {isEditing ? (
                                                <select
                                                    name="gender"
                                                    value={patientData.gender || ''}
                                                    onChange={handleInputChange}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                >
                                                    <option value="Male">Homme</option>
                                                    <option value="Female">Femme</option>
                                                    <option value="Other">Autre</option>
                                                </select>
                                            ) : (
                                                <p className="text-gray-900">{patientData.gender}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                                            {isEditing ? (
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={patientData.phone || ''}
                                                    onChange={handleInputChange}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                            ) : (
                                                <p className="text-gray-900">{patientData.phone}</p>
                                            )}
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Adresse ligne 1</label>
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    name="line1"
                                                    value={patientData.address?.line1 || ''}
                                                    onChange={handleAddressChange}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                            ) : (
                                                <p className="text-gray-900">{patientData.address?.line1}</p>
                                            )}
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Adresse ligne 2</label>
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    name="line2"
                                                    value={patientData.address?.line2 || ''}
                                                    onChange={handleAddressChange}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                            ) : (
                                                <p className="text-gray-900">{patientData.address?.line2}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Carte Historique Médical */}
                                <div className="bg-white rounded-xl shadow-sm p-6">
                                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Historique Médical</h2>
                                    {isEditing ? (
                                        <textarea
                                            name="medicalHistory"
                                            value={patientData.medicalHistory || ''}
                                            onChange={handleInputChange}
                                            rows="4"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Ajoutez l'historique médical du patient..."
                                        />
                                    ) : (
                                        <p className="text-gray-700 whitespace-pre-wrap">{patientData.medicalHistory || 'Aucun historique médical enregistré.'}</p>
                                    )}
                                </div>

                                {/* Carte Notes Médicales */}
                                <div className="bg-white rounded-xl shadow-sm p-6">
                                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Notes Médicales</h2>

                                    {/* Formulaire pour ajouter une note */}
                                    <form onSubmit={handleAddNote} className="mb-6 p-4 bg-gray-50 rounded-lg">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                                                <input
                                                    type="date"
                                                    value={newNote.date}
                                                    onChange={(e) => setNewNote(prev => ({ ...prev, date: e.target.value }))}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                                                <select
                                                    value={newNote.type}
                                                    onChange={(e) => setNewNote(prev => ({ ...prev, type: e.target.value }))}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                >
                                                    <option value="consultation">Consultation</option>
                                                    <option value="diagnostic">Diagnostic</option>
                                                    <option value="prescription">Prescription</option>
                                                    <option value="examen">Examen</option>
                                                    <option value="autre">Autre</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Docteur</label>
                                                <input
                                                    type="text"
                                                    value={newNote.doctor}
                                                    onChange={(e) => setNewNote(prev => ({ ...prev, doctor: e.target.value }))}
                                                    placeholder="Nom du docteur"
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Note</label>
                                            <textarea
                                                value={newNote.content}
                                                onChange={(e) => setNewNote(prev => ({ ...prev, content: e.target.value }))}
                                                rows="3"
                                                placeholder="Ajoutez une note médicale..."
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                required
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium"
                                        >
                                            Ajouter la note
                                        </button>
                                    </form>

                                    {/* Liste des notes */}
                                    <div className="space-y-4">
                                        {notes.length === 0 ? (
                                            <p className="text-gray-500 text-center py-8">Aucune note médicale enregistrée.</p>
                                        ) : (
                                            notes.map((note) => (
                                                <div key={note.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                                                    <div className="flex justify-between items-start mb-2">
                                                        <div>
                                                            <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded mr-2">
                                                                {note.type}
                                                            </span>
                                                            <span className="text-sm text-gray-600">{new Date(note.date).toLocaleDateString('fr-FR')}</span>
                                                            {note.doctor && (
                                                                <span className="text-sm text-gray-600 ml-2">• Dr. {note.doctor}</span>
                                                            )}
                                                        </div>
                                                        <button
                                                            onClick={() => handleDeleteNote(note.id)}
                                                            className="text-red-600 hover:text-red-800 text-sm"
                                                        >
                                                            Supprimer
                                                        </button>
                                                    </div>
                                                    <p className="text-gray-700">{note.content}</p>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Colonne droite - Photo et statut */}
                            <div className="space-y-6">
                                <div className="bg-white rounded-xl shadow-sm p-6">
                                    <div className="flex flex-col items-center">
                                        <img
                                            src={patientData.image}
                                            alt={patientData.name}
                                            className="w-48 h-48 rounded-full object-cover mb-4 border-4 border-blue-100"
                                        />
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                                            <span className="text-green-600 font-medium">Actif</span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900">{patientData.name}</h3>
                                        <p className="text-gray-600">{patientData.age} ans • {patientData.gender}</p>
                                    </div>
                                </div>

                                {/* Informations supplémentaires */}
                                <div className="bg-white rounded-xl shadow-sm p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Informations Supplémentaires</h3>
                                    <div className="space-y-3">
                                        {isEditing ? (
                                            <>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">Groupe sanguin</label>
                                                    <input
                                                        type="text"
                                                        name="bloodType"
                                                        value={patientData.bloodType || ''}
                                                        onChange={handleInputChange}
                                                        placeholder="Ex: O+"
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">Allergies</label>
                                                    <input
                                                        type="text"
                                                        name="allergies"
                                                        value={patientData.allergies || ''}
                                                        onChange={handleInputChange}
                                                        placeholder="Ex: Pénicilline, Pollen"
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">Médicaments actuels</label>
                                                    <textarea
                                                        name="currentMedications"
                                                        value={patientData.currentMedications || ''}
                                                        onChange={handleInputChange}
                                                        rows="3"
                                                        placeholder="Liste des médicaments..."
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    />
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div>
                                                    <span className="text-sm text-gray-600">Groupe sanguin</span>
                                                    <p className="text-gray-900 font-medium">{patientData.bloodType || 'Non renseigné'}</p>
                                                </div>
                                                <div>
                                                    <span className="text-sm text-gray-600">Allergies</span>
                                                    <p className="text-gray-900 font-medium">{patientData.allergies || 'Aucune allergie connue'}</p>
                                                </div>
                                                <div>
                                                    <span className="text-sm text-gray-600">Médicaments actuels</span>
                                                    <p className="text-gray-900 font-medium">{patientData.currentMedications || 'Aucun médicament'}</p>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientDetail;
