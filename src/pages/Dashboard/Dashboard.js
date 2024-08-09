import React, { useState, useEffect } from 'react';
import './index.scss'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { RingLoader } from "react-spinners";
import { useRecoilState } from 'recoil';
import $AuthData from "../../store/index";


export default function Dashboard() {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [authRecoil] = useRecoilState($AuthData);

 
    // استرجاع جميع المواعيد
    function getAllAppointments() {
        setLoading(true);
        axios.get("https://boody-magdy.vercel.app/api/appointments/")
            .then(response => {
                setAppointments(response.data);
                setLoading(false);
            })
            .catch(error => {
                toast.error('حدث خطاء اثناء تحميل المواعيد')
                console.error('Error fetching appointments:', error);
                setLoading(false);
            });
    }

    useEffect(() => {
        getAllAppointments();
    }, []);

    // حذف موعد
    function deleteAppointment(id) {
        setLoading(true);
        axios.delete(`https://boody-magdy.vercel.app/api/appointments/${id}`)
            .then(response => {
                console.log('Appointment deleted successfully:', response.data);
                // بعد حذف الموعد بنجاح، يتم تحديث قائمة المواعيد
                toast.success('تم حذف الحجز')
                getAllAppointments();
                setLoading(false);
            })
            .catch(error => {
                toast.error('حدث خطاء اثناء حذف الحجز')
                console.error('Error deleting appointment:', error);
                setLoading(false);
            });
    }

    return (
        <div className='dash'>
             {loading && ( 
              <div className="loading-overlay">
              <RingLoader color={"#fff"} loading={loading} size={150} className="loading-spinner" />
              </div>
             )}
            {authRecoil.role === "owner"?
            <Link className='btn-users' to={"/users"}>List Of Doctors</Link>
            :
            ""
            }
            <div className='main-header w-100 d-flex justify-center'style={{ fontSize: '20px' }}>Detection Dates</div>
            
            <div className='w-100'>
                {appointments.length > 0 && (
                    <div className="table-data">
                        <table className='w-100'>
                            <thead>
                                <tr>
                                    <th>Case name</th>
                                    <th>Time</th>
                                    <th>Date</th>
                                    <th>Doctor</th>
                                    <th>Processes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {appointments.map((appointment, index) => (
                                    <tr key={index}>
                                        <td>{appointment.name}</td>    
                                        <td>{appointment.time}</td>
                                        <td>{appointment.date}</td>
                                        <td>{appointment.doctor}</td>
                                        <td>
                                            {/* زر لحذف الموعد عند النقر عليه */}
                                            <button className='danger' onClick={() => deleteAppointment(appointment._id)}>حذف</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    )
}
