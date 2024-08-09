import React, { useEffect } from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { WOW } from "wowjs";
import {
  faBone,
  faBrain,
  faHeartbeat,
  faHospitalUser,
  faPersonBreastfeeding,
} from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
export default function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const wow = new WOW({live: false });
    wow.init();
  },[])
  return (
    <div className="Services">
      <div className="intro-services">
        <h1 className="wow animate__animated animate__fadeInUpBig animate__slow	1s">Our Services</h1>
        <span className="line"></span>
        <p className="wow animate__animated animate__fadeInDownBig animate__slow	1s">
        Al Hilal Hospital helps you quickly reach the right treatment, the right doctor, or any medical specialty you need, in addition to nursery specialization
        </p>
      </div>

      <div className="taps">
        <div className="tap wow animate__animated animate__fadeInDownBig">
          <div className="icon">
            <FontAwesomeIcon icon={faHeartbeat} />
          </div>

          <h3>Cardiology</h3>
          <span className="line-tap"></span>

          <p>
          Our board-certified cardiologists treat and prevent cardiovascular problems with a focus on heart health.
          </p>
          <Link className='appint more' to= "/Heart">Learn More ...</Link>
        </div>
        <div className="tap wow animate__animated animate__fadeInTopRight">
          <div className="icon">
          <FontAwesomeIcon icon={faEye} />
          </div>

          <h3>Ophthalmology</h3>
          <span className="line-tap"></span>

          <p>
          In order to keep your vision healthy, our ophthalmologists provide eye exams and surgeries.
          </p>
          <Link className='appint more' to= "/Orthopedic">Learn More ...</Link>
        </div>
        <div className="tap wow animate__animated animate__fadeInLeft">
          <div className="icon">
            <FontAwesomeIcon icon={faHospitalUser} />
          </div>

          <h3>Health Care</h3>
          <span className="line-tap"></span>

          <p>
            Voluptatum deleniti atque corrupti quos dolores et quas molestias
            excepturi sint occaecati cupiditate non provident
          </p>
          <Link className='appint more' to= "/Orthopedic">Learn More ...</Link>
        </div>
        <div className="tap wow animate__animated animate__fadeInDown">
          <div className="icon">
            <FontAwesomeIcon icon={faBone} />
          </div>

          <h3>Orthopedic Surgery</h3>
          <span className="line-tap"></span>

          <p>
          Discover renewed hope through our advanced bone marrow transplant procedures.
          </p>
          <Link className='appint more' to= "/Orthopedic">Learn More ...</Link>
        </div>
        <div className="tap wow animate__animated animate__fadeInLeft animate__delay-1s">
          <div className="icon">
            <FontAwesomeIcon icon={faBrain} />
          </div>

          <h3>Neurology</h3>
          <span className="line-tap"></span>

          <p>
          Specialized care for brain and nerve disorders, ensuring expert diagnosis and compassionate treatment.
          </p>
          <Link className='appint more' to= "/neurology">Learn More ...</Link>
        </div>
        <div className="tap wow animate__animated animate__fadeInRight animate__delay-1s">
          <div className="icon">
            <FontAwesomeIcon icon={faPersonBreastfeeding} />
          </div>

          <h3>Maternity Care</h3>
          <span className="line-tap"></span>

          <p>
          Experience comprehensive maternity care that prioritizes the health and well-being of expectant mothers and their newborns.
          </p>
          <Link className='appint more' to= "/Mother">Learn More ...</Link>
        </div>
      </div>
    </div>
  );
}
