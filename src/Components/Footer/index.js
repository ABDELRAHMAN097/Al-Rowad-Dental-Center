import React, { Fragment } from "react";
import "./index.scss";
import logo from "../../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faFacebookF, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { toast } from "react-toastify";
import $AuthData from '../../store/index';
import { useRecoilState } from "recoil";
import LogOut from "../LogOut/LogOut";

export default function Footer() {
  const [authRecoil] = useRecoilState($AuthData);
  const showToast = () => {
    toast.success("Your form has been submitted successfully!");
  };

  return (
    <div id="footer">
      <div className="filter">

      
      <div className="top-content">
        <div className="footer-top flex items-center justify-between">
          <div className="logo">
            <img src={logo} alt="footer logo" />
          </div>
          <div className="details">
            <p>
            Al-Bajour - Old Street - in front of Al-Narsh Mosque - above Tabarak Center
            </p>
          </div>
        </div>
        <div className="middle">
          <div className="middleTab">
            <div className="evelopeIcon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="textFooter">
              <h2>Subscribe Newsletter</h2>
              <p>
                principe kun je jouw contracten lorem opzeggen wanneer je wilt.
                Het kan echter zijn dat je een abonnement hebt afgesloten voor een
              </p>
            </div>
            <div className="input-supmit">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
              <button className="btn" type="submit" onClick={showToast}>Submit</button>
            </div>
          </div>
          <div className="middleTab">
            <div className="tab">
              <h2>Quick Links</h2>
              <ul>
                {authRecoil.isAuth ? (
                  <ul>
                    <li className='font-semibold md:my-0 toRight'>
                      <Link to="/">Home</Link>
                    </li>
                    <li className='font-semibold md:my-0 toRight'>
                      <Link to="/about">About</Link>
                    </li>
                    <li className='font-semibold md:my-0 toRight'>
                      <Link to="/services">Services</Link>
                    </li>
                    <li className='font-semibold md:my-0 toRight'>
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li className='font-semibold md:my-0 toRight'>
                      <Link to="/doctors">Doctors</Link>
                    </li>
                    <li>
                      <Link className='appint btn' to="/APPOINTMENT">APPOINTMENT</Link>
                    </li>
                    <li>
                      <LogOut />
                    </li>
                  </ul>
                ) : (
                  <Fragment>
                    <li className='font-semibold md:my-0 toRight'>
                      <Link to="/">Home</Link>
                    </li>
                    <li className='font-semibold md:my-0 toRight'>
                      <Link to="/about">About</Link>
                    </li>
                    <li className='font-semibold md:my-0 toRight'>
                      <Link to="/services">Services</Link>
                    </li>
                    <li className='font-semibold md:my-0 toRight'>
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li className='font-semibold md:my-0 toRight'>
                      <Link to="/doctors">Doctors</Link>
                    </li>
                    <li className='font-semibold md:my-0 toRight'>
                      <Link className="btn" to="/register">Register</Link>
                    </li>
                    <li className=''>
                      <Link className="btn" to="/login">login</Link>
                    </li>
                  </Fragment>
                )}
              </ul>
            </div>
          </div>
          <div className="middleTab">
            <div className="tab">
              <h2>Utility Page</h2>
              <p className="toRight"><span><FontAwesomeIcon icon={faFacebook} /></span><Link className="toRight" to="https://www.facebook.com/profile.php?id=61559522153835&mibextid=ZbWKwL">Pioneers Dentistry</Link></p>
            </div>
          </div>
          <div className="middleTab">
            <div className="tab">
              <h2>Contact</h2>
              <p className="toRight"><span><FontAwesomeIcon icon={faPhone} /></span> +201066410187</p>
              <p className="toRight"><span><FontAwesomeIcon icon={faPhone} /></span> +201148128930</p>
              <p className="toRight"><span><FontAwesomeIcon icon={faEnvelope} /></span> d4mala@gmail.com</p>
              <p className="time toRight">Open 24/7 Hours</p>
            </div>
          </div>
        </div>
      </div>

      <div className="Copyright">
        <p>Copyright © Al-Rowad Dental Center | Designed by Abdelrahman - Powered by <span><Link className="Abdelrahman" to="www.linkedin.com/in/abdelrahman-magdy-4944a3242">Abdelrahman</Link></span></p>
        <div className="social">
         
          <Link to="https://www.facebook.com/profile.php?id=61559522153835&mibextid=ZbWKwL">      
          <FontAwesomeIcon icon={faFacebookF} />        
          </Link> 

          <Link to="https://www.facebook.com/profile.php?id=61559522153835&mibextid=ZbWKwL">      
          <FontAwesomeIcon icon={faTwitter} />        
          </Link> 

          <Link to="https://www.facebook.com/profile.php?id=61559522153835&mibextid=ZbWKwL">      
          <FontAwesomeIcon icon={faLinkedinIn} />       
          </Link> 
  
        </div>
      </div>
      </div>
    </div>
  );
}
