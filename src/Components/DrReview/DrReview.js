import React from 'react'
import './DrReview.scss'
import photo from '../../assets/img/avatar1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { useRecoilState } from 'recoil';
import $doctorAtom from '../../store/doctorAtom';
import { Navigate } from 'react-router-dom';

export default function DrReview() {
const [ doctorData ] = useRecoilState($doctorAtom);
if(doctorData == null){
  return <Navigate to="/doctors" />
}
  console.log(doctorData)
  const scheduleData = [
    { day: 'Monday', workHours: '8:00 am - 3:00 pm' },
    { day: 'Tuesday', workHours: '8:00 am - 3:00 pm' },
    { day: 'Wednesday', workHours: '8:00 am - 3:00 pm' },
    { day: 'Tuesday', workHours: '8:00 am - 3:00 pm' },
    { day: 'Friday', workHours: 'Closed' },
    { day: 'Saturday', workHours: '8:00 am - 3:00 pm' },
    { day: 'Sunday', workHours: 'Closed' },
  ];
  return (
    <div className='Drcontainer'>
        <div className='details-sidebar'>
          <div className='imgDoc'>
            <img src={photo} alt='doctor'/>
          </div>
          <div className='Working-Hours'>
            <div className='item'>
              <h2>Working Hours</h2>
            </div>
          <table>
      <tbody>
        {scheduleData.map((item, index) => (
          <tr key={index}>
            <td className='day'>{item.day}</td>
            <td>{item.workHours}</td>
          </tr>
        ))}
      </tbody>
    </table>
          </div>
          <div className='item'>
              <h2>Contact Info</h2>
            </div>
            <div className='info-doc'>
              <h2> <FontAwesomeIcon icon={faPhone} className='icon'/>{doctorData.phone}</h2>
              <h2> <FontAwesomeIcon icon={faEnvelope} className='icon'/>{doctorData.email}</h2>
              
            </div>
        </div>
        <div className='details-content'>
          <div className='item'>
          <h2>{doctorData.fullName}</h2>
          </div>
          <div className='p-doctor'>
            <p>Dr. Lisa Robinson is a highly skilled and compassionate obstetrician-gynecologist who is deeply committed to women's health and well-being. With a wealth of experience in the field, she has earned a reputation for her exceptional patient care and her dedication to providing comprehensive reproductive healthcare services.</p>
            <p>Dr. Robinson's journey in obstetrics and gynecology began with a strong desire to support women through every stage of their lives. Her extensive medical training and specialization have equipped her with a deep understanding of women's reproductive health, from adolescence to menopause. She is proficient in diagnosing and treating a wide range of gynecological conditions, from routine exams and contraceptive counseling to managing complex reproductive issues.</p>
            <p>Patients who seek Dr. Robinson's care can expect a compassionate and patient-centered approach. She places great emphasis on creating a safe and comfortable environment for her patients, where they can openly discuss their concerns and health goals. Dr. Robinson takes the time to listen attentively, ensuring that her patients feel heard and understood, whether they are discussing family planning, pregnancy, or gynecological issues.</p>
            <p>In her role as an obstetrician, Dr. Robinson is dedicated to providing comprehensive prenatal care to expectant mothers. She guides them through each stage of pregnancy, addressing their questions and concerns while monitoring the health and development of both mother and baby. Her expertise in obstetrics ensures that her patients receive the highest standard of care during this crucial time in their lives.</p>
            <p>Overall, Dr. Lisa Robinson is a compassionate and skilled obstetrician-gynecologist who combines medical expertise with empathy, communication, and a patient-centered approach. Her impact on women's health, both in patient care and education, is a testament to her dedication to improving the lives of her patients and promoting women's well-being.</p>
          </div>
        </div>
    </div>
  )
}
