import React, { useState, useEffect } from 'react';
import './index.scss'
import axios from 'axios';
import { toast } from 'react-toastify';
import { RingLoader } from "react-spinners";
export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  function changeUserToAdmin(id) {
    setLoading(true);
    // عملية تعديل الحالة
    const newData = {
      role: 'admin' // تغيير قيمة الدور إلى "owner"
    };
    axios.patch(`https://boody-magdy.vercel.app/api/users/${id}`, newData)
      .then(response => {
        console.log('User status updated successfully:', response.data);
        //  تحميل البيانات بعد تعديل لحالةالمستخدم
        getAllUsers();
        toast.success("تم تغيير المستخدم  الي الادمن");
        setLoading(false);
      })
      .catch(error => {
        console.error('Error updating user status:', error);
        toast.error("حدث خطأ أثناء محاولة تعيين المستخدم");
        setLoading(false);
      });
  }
  function changeOwenrToUser(id) {
    setLoading(true);
    const newData = {
      role: 'user'
    };
    axios.patch(`https://boody-magdy.vercel.app/api/users/${id}`, newData)
      .then(response => {
        console.log('User status updated successfully:', response.data);
        //  تحميل البيانات بعد تعديل لحالةالمستخدم
        getAllUsers();
        toast.success("تم تغيير اونر  الي مستخدم");
        setLoading(false);
      })
      .catch(error => {
        console.error('Error updating user status:', error);
        toast.error("حدث خطأ أثناء محاولة تعيين المستخدم");
        setLoading(false);
      });
  }
  function changeUserToOwner(id) {
    setLoading(true);
    const newData = {
      role: 'owner' 
    };
    axios.patch(`https://boody-magdy.vercel.app/api/users/${id}`, newData)
      .then(response => {
        console.log('User status updated successfully:', response.data.phone);
        //  تحميل البيانات بعد تعديل حالةالمستخدم
        getAllUsers();
        toast.success("تم تعيين الاونر بنجاح");
        setLoading(false);
      })
      .catch(error => {
        console.error('Error updating user status:', error);
        toast.error("حدث خطأ أثناء محاولة تعيين المستخدم");
        setLoading(false);
      });
  }
  //  لاسترجاع بيانات المستخدمين
  function getAllUsers() {
    setLoading(true);
    axios.get("https://boody-magdy.vercel.app/api/users")
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  }
  //   استرجاع البيانات عند التحميل 
  useEffect(() => {
    getAllUsers();
    // getAdmins(); // استدعاء دالة getAdmins لطباعة المستخدمين الـ owner
  }, []);

  function deleteUser(id) {
    setLoading(true);
    axios.delete(`https://boody-magdy.vercel.app/api/users/${id}`)
      .then(response => {
        // بعد حذف المستخدم بنجاح، يجب تحديث قائمة المستخدمين
        getAllUsers();
        toast.success("تم حذف المستخدم بنجاح");
        setLoading(false);
      })
      .catch(error => {
        console.error('Error deleting user:', error);
        toast.error("حدث خطأ أثناء محاولة حذف المستخدم");
        setLoading(false);
      });
  }

  return (
    <div  className='w-70 dash-user'>
       {loading && ( // Display the waiting screen if this is the case true
       <div className="loading-overlay">
       <RingLoader color={"#3fbbc0"} loading={loading} size={150} className="loading-spinner" />
       </div>
      )}
      <h1 className='main-header'>Doctors List</h1>
      <table className='table-data-user'>
        <thead>
          <tr>
            <th>Name</th>
            <th className='email'>Email</th>
            <th className='email'>phone</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              
              <td>{user.fullName}</td>
              <td className='email'>{user.email}</td>
              <td className='email'>{user.phone}</td>
              <td>{user.role}</td>
              
              <td className='m-5'>
                 {/*  إضافة قائمة منسدلة لتغيير دور المستخدم او حذفه*/}
                <select className='form-control' onChange={(e) => {
                  const selectedRole = e.target.value;
                  switch(selectedRole) {
                    case 'owner':
                      changeUserToOwner(user._id);
                      break;
                    case 'admin':
                      changeUserToAdmin(user._id);
                      break;
                    case 'user':
                      changeOwenrToUser(user._id);
                      break;
                      case 'delet':
                      deleteUser(user._id);
                      break;
                    default:
                      break;
                  }
                }}>
                  <option value="select">select</option>
                  <option value="owner">Owner</option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                  <option value="delet">delete</option>
                </select>
              </td>   
            </tr>
          ))}
        </tbody>
      </table>  
    </div>
  );
}
