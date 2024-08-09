import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useRecoilState } from "recoil";
import $AuthData from '../../store/index';
import './LogOut.scss'

export default function LogOut() {
  const [appointments, setAppointments] = useState([]);
    console.log(appointments)
    const [authRecoil , setauthRecoil] = useRecoilState($AuthData)
    console.log(authRecoil)
    function handelLogOut(){
      localStorage.removeItem("appointments");
      setAppointments([]);
        setauthRecoil({
            isAuth : false,
            user : null
        })
        toast.success('تم تسجيل خروج', {autoClose:2000})
        localStorage.removeItem('loginUser')
    }
  return (
    <div>
        <button onClick={handelLogOut} className='btn'>Log Out</button>
    </div>
  )
}
