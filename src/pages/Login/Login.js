import React, { useEffect, useState } from "react";
import "./Login.scss";
import photo from '../../assets/img/login&register.jpg'
import Error from "../../Erorr/Error"
import { Link } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import LoginSchema from "../../Schemas/LoginSchema";
import axios from "axios";
import { toast } from 'react-toastify';
import { useRecoilState } from "recoil";
import $AuthData from '../../store/index'
import { RingLoader } from "react-spinners";
import { WOW } from "wowjs";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [authRecoil , setauthRecoil] = useRecoilState($AuthData)
  console.log(authRecoil)
  function handleLogin (values){
  setLoading(true);
    const newData ={...values}
    delete newData.confirm_password;
     axios.post("https://boody-magdy.vercel.app/api/users/login" , newData)
     .then(userData =>{
      if(userData.data){
        toast.success(`مرحباً بك ${userData.data.fullName}`);
        const localData = {
          isAuth : true,
          user : userData.data.fullName,
          role : userData.data.role
        }
        setauthRecoil(localData)
       localStorage.setItem('loginUser' , JSON.stringify(localData))
        console.log(userData.data)
        console.log(userData.data.role)
      }else{
        toast.error("حدث خطاء")
        setLoading(false);
      }
     })
      .catch(error => {
            console.error("خطأ في الاتصال بالخادم:", error);
            toast.error("حدث خطأ أثناء محاولة الاتصال بالخادم");
            setLoading(false);
        });
}
useEffect(() => {
  const wow = new WOW({live: false });
  wow.init();
  },[])
  return (
    <>
    <div className="login-page ">
       {loading && (
       <div className="loading-overlay">
       <RingLoader color={"#fff"} loading={loading} size={150} className="loading-spinner" />
     </div>
      )}
      <div className="wow animate__animated animate__fadeInUpBig animate__slow	1s">
        <img src={photo} alt="" width={1000}/>
      </div>

      <Formik
      className="auth-form m-auto my-5"
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={handleLogin} 
        >
        {({ errors }) => {
          return (
            <Form className="loginForm wow animate__animated animate__fadeInDownBig animate__slow 1s">
              <div className="text">
                <h1>Login to Your Account</h1>
                <p>Enter your details to continue</p>
              </div>
              <div className="input-login">
                
                <Field type="text" name="email" placeholder="Email" />
                <Error>
                  <ErrorMessage name="email" />
                </Error>
              </div>
              <div className="input-login">
               
                <Field type="password" name="password" placeholder="Passwoed" />
                <Error>
                  <ErrorMessage name="password" />
                </Error>
              </div>
              <div className="mb-3 ml-3">
                don{" ُ"}t have an acount? <Link className="moveTo" to="/Register">Register Now</Link>
              </div>
              <div className="done">
                <button className="btn-log-reg" type="submit">Login</button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
    </>
  );
}
