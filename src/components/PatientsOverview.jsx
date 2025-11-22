import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Sidebar from './Sidebar';
import Headerlistepatient from './Headerlistepatient';
import Tabs from './Tabs';

const PatientsOverview = () => {
    // Hne nkharejou patients mel context
    const { patients } = useContext(AppContext);
    const navigate = useNavigate();
    // Supprimer : const [activeTab, setActiveTab] = useState('overview');

    return (
        <div className="flex h-screen bg-blue-50">
            <Sidebar />

            <div className="flex-1 flex flex-col">
                <Headerlistepatient />
                <Tabs />

                <div className="flex-1 bg-white px-8 py-6 overflow-auto">
                    <div className='flex flex-col items-center gap-4 my-8 text-gray-900'>
                        <h1 className='text-3xl font-medium'>Patients Overview</h1>
                        <p className='sm:w-1/3 text-center text-sm'>
                            Browse through our registered patients and their information.
                        </p>

                        {/* Grid patients */}
                        <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0 mt-6'>
                            {/* Nakhdhou ken patients lkoul */}
                            {patients.map((item, index) => (
                                <div
                                    onClick={() => navigate(`/patients/${item._id}`)}
                                    className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
                                    key={index}
                                >
                                    <img className='bg-blue-50 w-full h-64 object-cover' src={item.image} alt={item.name} />
                                    <div className='p-4'>
                                        <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                                            <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                                            <p>Active</p>
                                        </div>
                                        <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                                        <p className='text-gray-600 text-sm'>{item.age} years old • {item.gender}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Button ll page complète eli feha all patients */}
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
