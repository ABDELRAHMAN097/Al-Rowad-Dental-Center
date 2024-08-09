import React from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import $doctorAtom from '../../store/doctorAtom';

export default function ViewDoctor({ user, email }) {
  const [doctorData, setDoctorData] = useRecoilState($doctorAtom);
  const navigate = useNavigate();
  function passData() {
    setDoctorData( user ); // تم تغيير البيانات المرسلة إلى DrReview
    navigate("/drReview");
  }
  return (
    <div>
      <button className='btn-users' onClick={passData}>View</button>
    </div>
  );
}
