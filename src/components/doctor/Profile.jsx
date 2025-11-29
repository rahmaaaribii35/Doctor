import React, { useState, useEffect  } from 'react';

const Profile = ({ doctor }) => {

  //bch nchouf esq eni fl edit mode wale yani l touton cliquéwqle w pqr default le
  const [editMode, setEditMode] = useState(false);
  //el form li khdhitou ml prop doctor bch nbadal fih(copie ml donnees lmwjoudin deja)
  const [formDoctor, setFormDoctor] = useState(doctor);
  
   // synchroniser le state formDoctor quand le prop doctor change
   useEffect(() => {
    setFormDoctor(doctor);
    setEditMode(false); // optionnel : quitter le mode édition si on change de docteur
  }, [doctor]);
  
  //Fonction pour changer les valeurs
  const handleChange = (e) => { //handlechange hedhi lel input lbsit bch yetbdl valeur mteeou
    const { name, value } = e.target; //njbd valeur li fl input

    // Mise à jour des champs bch yekhou lmaloumet li dejamwjoudin wyhot fblasethom li bdlthom w yraja lform
    setFormDoctor({
      ...formDoctor,
      [name]: value
    });
  };

  //Mise à jour pour les champs d'adresse nafs lhkeya
  const handleAddressChange = (e) => {
    const { name, value } = e.target;

    setFormDoctor({
      ...formDoctor,
      address: {
        ...formDoctor.address,
        [name]: value
      }
    });
  };

  // sauvegarder et quitter edit mode
  const handleSave = () => {
    setEditMode(false);
    

  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">My Profile</h2>

      <div className="bg-white p-6 rounded-lg shadow-sm border">
        
       {/*header mta profil */}
        <div className="flex items-center mb-6">
          <img
            src={formDoctor.image}
            alt={formDoctor.name}
            className="w-20 h-20 rounded-full object-cover mr-6 border"
          />
          
          <div>
            {editMode ? ( //idha ahna fl edit mode bch ydhaharli input sn,n le
              <input
                type="text"
                name="name"
                value={formDoctor.name}
                onChange={handleChange}
                className="border px-2 py-1 rounded w-full"
              />
            ) : (
              <h3 className="text-xl font-semibold">{formDoctor.name}</h3>
            )}

            {editMode ? (
              <input
                type="text"
                name="speciality"
                value={formDoctor.speciality}
                onChange={handleChange}
                className="border px-2 py-1 rounded w-full mt-1"
              />
            ) : (
              <p className="text-gray-600">{formDoctor.speciality}</p>
            )}
          </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* infos personnelles */}
          <div>
            <h4 className="font-semibold mb-2">Informations</h4>

            <p><strong>Diploma:</strong></p>
            {editMode ? (
              <input
                type="text"
                name="degree"
                value={formDoctor.degree}
                onChange={handleChange}
                className="border px-2 py-1 rounded w-full"
              />
            ) : (
              <p>{formDoctor.degree}</p>
            )}

            <p className="mt-3"><strong>Experience:</strong></p>
            {editMode ? (
              <input
                type="text"
                name="experience"
                value={formDoctor.experience}
                onChange={handleChange}
                className="border px-2 py-1 rounded w-full"
              />
            ) : (
              <p>{formDoctor.experience}</p>
            )}

            <p className="mt-3"><strong>Consultation Fees:</strong></p>
            {editMode ? (
              <input
                type="number"
                name="fees"
                value={formDoctor.fees}
                onChange={handleChange}
                className="border px-2 py-1 rounded w-full"
              />
            ) : (
              <p>{formDoctor.fees}€</p>
            )}
          </div>

         
          <div>
            <h4 className="font-semibold mb-2">Office</h4>

            <p>Address Line 1:</p>
            {editMode ? (
              <input
                type="text"
                name="line1"
                value={formDoctor.address.line1}
                onChange={handleAddressChange}
                className="border px-2 py-1 rounded w-full"
              />
            ) : (
              <p>{formDoctor.address.line1}</p>
            )}

            <p className="mt-3">Address Line 2:</p>
            {editMode ? (
              <input
                type="text"
                name="line2"
                value={formDoctor.address.line2}
                onChange={handleAddressChange}
                className="border px-2 py-1 rounded w-full"
              />
            ) : (
              <p>{formDoctor.address.line2}</p>
            )}
          </div>

        </div>

        
        {editMode ? (
          <button
            onClick={handleSave}
            className="mt-6 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setEditMode(true)}
            className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Edit Profile
          </button>
        )}

      </div>
    </div>
  );
};

export default Profile;
