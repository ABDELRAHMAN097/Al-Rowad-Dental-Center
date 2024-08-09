import React from "react";
import orthopedic from "../../assets/img/Orthopedic.jpg";
import "./Orthopedic.scss";
export default function Orthopedic() {
  return (
    <div className="orth">
      <div className="hero">
        <h2>Orthopedic Surgery</h2>
        <p>
          Our Orthopedic Surgery Department specializes in advanced surgical
          treatments for musculoskeletal conditions. From joint replacements to
          spine surgery, our board-certified orthopedic surgeons use the latest
          techniques and technology to restore your mobility and alleviate pain.
          We are committed to helping you get back to an active, pain-free
          lifestyle.
        </p>
      </div>
      <div className="info">
        <p>
          Musculoskeletal conditions can significantly impact your quality of
          life. Our Orthopedic Surgery Department is dedicated to providing the
          highest level of care and expertise in orthopedic treatments.
        </p>
        <p>
          <span>Evaluation and Diagnosis:</span> Our journey begins with a
          thorough evaluation and accurate diagnosis. We utilize advanced
          imaging and diagnostic tools to understand the extent of your
          condition.
        </p>
        <p>
          <span>Treatment Options:</span> We offer a wide range of treatment
          options, including joint replacements, arthroscopic procedures, spine
          surgeries, and sports medicine interventions. Our orthopedic surgeons
          collaborate to develop personalized treatment plans based on your
          specific needs.
        </p>
        <p>
          <span>Minimally Invasive Procedures:</span> Whenever possible, we
          prioritize minimally invasive procedures to minimize discomfort,
          scarring, and recovery time.
        </p>
        <p>
          <span>Rehabilitation and Recovery:</span>Our rehabilitation programs
          are tailored to help you regain strength and mobility. Whether you're
          recovering from surgery or managing a chronic condition, our team is
          here to support your recovery journey.
        </p>
        <p>
          <span>Patient Education:</span>We believe in empowering our patients
          with knowledge about their condition and treatment options. We ensure
          you have a clear understanding of your treatment plan and what to
          expect throughout your recovery.
        </p>
      </div>
      <div>
        <img className="img" src={orthopedic} alt="" />
      </div>
    </div>
  );
}
