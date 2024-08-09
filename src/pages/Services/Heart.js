import React from "react";
import heartr from "../../assets/img/heart.jpg";
import "./Orthopedic.scss";

export default function Heart() {
  return (
    <div className="orth">
      <div className="hero">
        <h2>Cardiac Care</h2>
        <p>
          At our facility, we offer comprehensive cardiac care to patients of
          all ages. From preventive screenings and diagnostics to advanced
          treatment options, our team of cardiologists and cardiovascular
          specialists is committed to your heart health. We prioritize early
          detection and personalized care to ensure the best outcomes for every
          patient.
        </p>
      </div>
      <div className="info">
        <p>
          Our Cardiac Care Program is designed to address the full spectrum of
          cardiovascular needs. We understand that heart health is crucial, and
          our experienced team is here to support you every step of the way.
        </p>
        <p>
          <span>Preventive Care:</span> Our preventive services include risk
          assessments, cholesterol management, and blood pressure monitoring.
          Regular check-ups and lifestyle guidance are key components of our
          preventive approach.
        </p>
        <p>
          <span>Diagnostics:</span> We employ state-of-the-art diagnostic tools,
          including echocardiography, stress tests, and cardiac catheterization,
          to accurately assess your heart's condition.
        </p>
        <p>
          <span>Minimally Invasive Procedures:</span> Whenever possible, we
          prioritize minimally invasive procedures to minimize discomfort,
          scarring, and recovery time.
        </p>
        <p>
          <span>Treatment Options:</span>Should intervention be necessary, we
          offer a wide range of treatments, from medication management to
          minimally invasive procedures and cardiac surgery. Our cardiologists
          collaborate closely to determine the best course of action for each
          patient.
        </p>
        <p>
          <span>Ongoing Support:</span> We provide ongoing support to help
          patients manage chronic conditions, make lifestyle changes, and
          maintain optimal heart health.
        </p>
      </div>
      <div>
        <img className="img" src={heartr} alt="" />
      </div>
    </div>
  );
}
