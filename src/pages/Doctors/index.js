import React, { useEffect, useState } from "react";
import "./Doctors.scss";
import photo from "../../assets/img/avatar1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook,faInstagram,faLinkedin,faTwitter,} from "@fortawesome/free-brands-svg-icons";
import { RingLoader } from "react-spinners";
import axios from "axios";
import ViewDoctor from "../../Components/ViewDoctor/ViewDoctor";
import { WOW } from "wowjs";

export default function index() {  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [users, setUsers] = useState([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
		const wow = new WOW({live: false });
		wow.init();
	  },[])
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    getAllAdmins();
  }, []);

  function getAllAdmins() {
    setLoading(true);
    axios
      .get("https://boody-magdy.vercel.app/api/users")
      .then((response) => {
        const adminUsers = response.data.filter(
          (user) => user.role === "admin"
        );
        setUsers(adminUsers);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching admin users:", error);
        setLoading(false);
      });
  }

  return (
    <>
      <div className="Services">
        {loading && (
          <div className="loading-overlay">
            <RingLoader
              color={"#fff"}
              loading={loading}
              size={150}
              className="loading-spinner"
            />
          </div>
        )}
        <div className="text-center">
          <h1 className="main-header wow animate__animated animate__fadeInUpBig animate__slow	1s">DOCTORS</h1>
          <p className='para mt-3 wow animate__animated animate__fadeInDownBig animate__slow 1s'>
          Al Rowad Dental Center is compliant with OSHA standards. We follow strict sterilization protocols and standards in all our operations. Our employees receive regular training on OSHA regulations to stay up to date on recent changes. We have 12 staff dentists, 15 associate dentists, hygienists, nurses, 3 secretaries, and 2 office staff.
          </p>
        </div>
        <div className="doctors className='wow animate__animated animate__fadeInDownBig animate__slow 1s'">
          {users.map((user) => (
            <div key={user._id} className="doctor">
              <img src={photo} alt="doc-1" />
              <div className="social-doc p-2">
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
              <div className="text-doc">
                <h2>{user.fullName}</h2>
                <ViewDoctor user={user} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
