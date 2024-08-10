import React, { useState, useEffect } from "react";
import "./Appointment.scss";
import appointPhoto from '../../assets/img/appointment.jpg';
import close from '../../assets/img/close.png'
import axios from "axios";
import { toast } from "react-toastify";
import { RingLoader } from "react-spinners";
import { useRecoilValue } from "recoil";
import { formVisibilityState } from "../../store/formState"; 

export default function Index() {
  const showForm = useRecoilValue(formVisibilityState);
  const [users, setUsers] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [doctor, setDoctor] = useState("");
  const [nameError, setNameError] = useState("");
  const [timeError, setTimeError] = useState("");
  const [dateError, setDateError] = useState("");
  const [doctorError, setDoctorError] = useState("");

  function validateForm() {
    let isValid = true;

    if (!name) {
      setNameError("الرجاء إدخال الاسم");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!time) {
      setTimeError("الرجاء إدخال الوقت");
      isValid = false;
    } else {
      setTimeError("");
    }

    if (!date) {
      setDateError("الرجاء إدخال التاريخ");
      isValid = false;
    } else {
      const today = new Date().toISOString().split("T")[0];
      if (date < today) {
        setDateError("لا يمكن اختيار تاريخ سابق");
        isValid = false;
      } else {
        setDateError("");
      }
    }

    if (!doctor) {
      setDoctorError("الرجاء اختيار الطبيب");
      isValid = false;
    } else {
      setDoctorError("");
    }

    return isValid;
  }

  function handelAppointment(event) {
    event.preventDefault();
  
    if (!validateForm()) {
      return;
    }
  
    const newValues = { name, time, date, doctor };
    setLoading(true);
    axios
      .post("https://boody-magdy.vercel.app/api/appointments/", newValues)
      .then((response) => {
        setLoading(false);
        toast.success(`تم الحجز`);
        const updatedAppointments = [...appointments, response.data];
        setAppointments(updatedAppointments);
        localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
      })
      .catch((error) => {
        toast.error("حدث خطأ، لم يتم الحجز");
        console.error("خطأ أثناء الاتصال بالخادم:", error);
        setLoading(false);
      });
  }

  useEffect(() => {
    getAllAdmins();
  }, []);

  function getAllAdmins() {
    setLoading(true);

    axios
      .get("https://boody-magdy.vercel.app/api/users")
      .then((response) => {
        setLoading(false);

        const adminUsers = response.data.filter(
          (user) => user.role === "admin"
        );
        setUsers(adminUsers);
      })
      .catch((error) => {
        console.error("خطأ في جلب مستخدمي الأدمن:", error);
        setLoading(true);
      });
  }

  function handelDelete(id) {
    setLoading(true);
    axios
      .delete(`https://boody-magdy.vercel.app/api/appointments/${id}`)
      .then((response) => {
        console.log('تم حذف الموعد', response.data);
        toast.success('تم حذف الحجز');
        setLoading(false);
        const updatedAppointments = appointments.filter(appointment => appointment._id !== id);
        setAppointments(updatedAppointments);
        localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
      })
      .catch((error) => {
        toast.error('حدث خطأ أثناء حذف الحجز');
        console.error('خطأ في حذف الموعد:', error);
        setLoading(false);
      });
  }

  useEffect(() => {
    const storedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(storedAppointments);
  }, []);

  return (
    <div className="Appoint">
      {loading && ( 
        <div className="loading-overlay">
          <RingLoader color={"#fff"} loading={loading} size={150} className="loading-spinner" />
        </div>
      )}
      <div className="APPOINTMENT">
        <h1 className="main-header">book an appointment</h1>
        
        <p className="mb-3">
          Please choose your preferred doctor from the available list. Please select a date
          And the appropriate time for you, according to your specialty, for the medical appointment. After setting the appointment, it is requested
          You must confirm your reservation to complete the process. Thank you for using our hospital booking system
          Email. We look forward to serving you and providing you with appropriate health care.
        </p>

        {showForm ? (
          <form onSubmit={handelAppointment}>
            <div className="appoint-photo">
              <img src={appointPhoto} alt="appointPhoto" />
            </div>
            <div className="inputs">
              <div className="input-group">
                <label htmlFor="">name</label>
                <input
                  className="input-Appoint"
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder=":name"
                />
                {nameError && <span className="error-message">{nameError}</span>}
              </div>

              <div className="input-group">
                <label htmlFor="">time</label>
                <input
                  className="input-Appoint"
                  type="time"
                  name="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  placeholder=":time"
                />
                {timeError && <span className="error-message">{timeError}</span>}
              </div>

              <div className="input-group">
                <label htmlFor="">date</label>
                <input
                  className="input-Appoint"
                  type="date"
                  name="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  placeholder=":date"
                />
                {dateError && <span className="error-message">{dateError}</span>}
              </div>

              <div className="input-group">
                <label htmlFor="">doctors</label>
                <select
                  className="input-Appoint specialty form-control w-100"
                  name="doctor"
                  value={doctor}
                  onChange={(e) => setDoctor(e.target.value)}
                >
                  <option value="">Choose your doctor</option>
                  {users.map((user) => (
                    <option key={user._id} value={user.fullName}>{user.fullName}</option>
                  ))}
                </select>
                {doctorError && <span className="error-message">{doctorError}</span>}
              </div>

              <div className="input-group">
                <button className="btn-ll" type="submit">Book now</button>
              </div>
            </div>
          </form>
        ):(
          <img src={close} alt="" />
        )
      }
      </div>

      {appointments.length > 0 ? (
        <div className="Appoint-data mx-2 mt-3">
          <table className="table-data-user  my-3 mx-2">
            <thead>
              <tr>
                <th>Case name</th>
                <th>time</th>
                <th>date</th>
                <th>doctor name</th>
                <th>Action</th>
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
                    <button className="danger" onClick={() => handelDelete(appointment._id)}>delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h3 className="d-flex justify-content-center">Not booked yet</h3>
      )}
    </div>
  );
}
