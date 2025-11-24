import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Headerlistepatient from './Headerlistepatient';
import Tabs from './Tabs';

const PatientsOverview = () => {
    // Kharej patients mel context (data partagée)
    const { patients } = useContext(AppContext);
    const navigate = useNavigate();

    return (
        <div className="flex h-screen bg-blue-50">
            {/* Sidebar men liser*/}

            <div className="flex-1 flex flex-col">
                <Headerlistepatient /> {/* Header men fou9 */}
                <Tabs /> {/* Tabs: Overview wala List */}

                <div className="flex-1 bg-white px-8 py-6 overflow-auto">
                    <div className='flex flex-col items-center gap-4 my-8 text-gray-900'>
                        <h1 className='text-3xl font-medium'>Patients Overview</h1>
                        <p className='sm:w-1/3 text-center text-sm'>
                            Browse through our registered patients and their information.
                        </p>

                        {/* Grid mta3 patients (kol patient f carte) */}
                        <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0 mt-6'>
                            {/* Loop 3la kol patients w affichi carte mte3 kol patient */}
                            {patients.map((item, index) => (
                                <div
                                    onClick={() => navigate(`/patients/${item._id}`)} // Ken t7ot 3la patient, 7awwel lel page detail
                                    className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
                                    key={index}
                                >
                                    {/* Image patient */}
                                    <img className='bg-blue-50 w-full h-64 object-cover' src={item.image} alt={item.name} />
                                    <div className='p-4'>
                                        {/* Badge "Active" */}
                                        <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                                            <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                                            <p>Active</p>
                                        </div>
                                        {/* Ism patient */}
                                        <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                                        {/* Age w gender */}
                                        <p className='text-gray-600 text-sm'>{item.age} years old • {item.gender}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Bouton bch t7awwel lel page liste complète */}
                        <button onClick={() => { navigate('/patients'); scrollTo(0, 0) }} className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10'>
                            View All Patients
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientsOverview;
