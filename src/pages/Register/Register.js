import React, { useEffect, useState } from "react";
import "./Register.scss";
import photo from '../../assets/img/login&register.jpg'
import Error from "../../Erorr/Error"
import { Link } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import RegisterSchema from "../../Schemas/RegisterSchema";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { RingLoader } from "react-spinners";
import { WOW } from "wowjs";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleRegister(values) {
    setLoading(true);
    const newData = { ...values };
    delete newData.confirm_password;

    axios.post("https://boody-magdy.vercel.app/api/users/signup", newData)
      .then((response) => {
        toast.success(`تم  انشاء اكونت بنجاح`, { autoClose: 2000 });
        navigate("/login");
        setLoading(false);
        console.log(response);
      })
      .catch((errors) => {
        console.log(errors);
        setLoading(false);
      });
  }
  useEffect(() => {
		const wow = new WOW({live: false });
		wow.init();
	  },[])

  return (
    <>
      <div className="login-page">
        {loading && (
          <div className="loading-overlay">
            <RingLoader color={"#fff"} loading={loading} size={150} className="loading-spinner" />
          </div>
        )}

        <div className="wow animate__animated animate__fadeInDownBig animate__slow 1s">
          <img src={photo} alt="" width={1000} />
        </div>

        <Formik
          initialValues={{
            fullName: "",
            phone: "", // إضافة حقل الهاتف هنا
            email: "",
            password: "",
            confirm_password: "",
          }}
          validationSchema={RegisterSchema}
          onSubmit={handleRegister}
        >
          {({ errors }) => {
            return (
              <Form className="loginForm wow animate__animated animate__fadeInUpBig animate__slow	1s">
                <div className="text">
                  <h1>Create New Account</h1>
                  <p>Start your journey here</p>
                </div>
                <div className="input-login">
                  
                  <Field type="text" name="fullName" placeholder="Full Name" />
                  <Error>
                    <ErrorMessage name="fullName" />
                  </Error>
                </div>
                <div className="input-login">
                 
                  <Field type="text" name="phone" placeholder="Phone-numper" />
                  <Error>
                    <ErrorMessage name="phone" />
                  </Error>
                </div>
                <div className="input-login">
                 
                  <Field type="text" name="email" placeholder="Email" />
                  <Error>
                    <ErrorMessage name="email" />
                  </Error>
                </div>
                <div className="input-login">
                  
                  <Field type="password" name="password" placeholder="Password" />

                  <Error>
                    <ErrorMessage name="password" />
                  </Error>
                </div>
                <div className="input-login">
                  
                  <Field
                    type="password"
                    name="confirm_password"
                    placeholder="Confirm Password"
                  />
                  <Error>
                    <ErrorMessage name="confirm_password" />
                  </Error>
                </div>
                <div className="mb-3 ml-3">
                  Already have an account? <Link className="moveTo" to="/login">Login Now</Link>
                </div>
                <div className="done">
                  <button className="btn-log-reg" type="submit">Register</button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
}
