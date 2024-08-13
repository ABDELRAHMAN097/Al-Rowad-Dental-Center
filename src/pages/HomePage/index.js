import React, { useEffect, useState } from "react";
import doc from "../../assets/img/banner-dr-img.png";
import drcard from "../../assets/img/dr-cart.png";
import rerectangle from "../../assets/img/rectangle.png";
import aboutRedTop from "../../assets/img/ellipse-top.png";
import aboutBlueBottom from "../../assets/img/ellipse-bottom.png";
import serv1 from "../../assets/img/serv1.png";
import serv2 from "../../assets/img/serv2.png"
import serv3 from "../../assets/img/serv3.png"
import serv4 from "../../assets/img/serv4.png"
import serv5 from "../../assets/img/serv5.png"
import serv6 from "../../assets/img/serv6.png"
import serv7 from "../../assets/img/serv7.png"
import serv8 from "../../assets/img/serv8.png"
import bannerLarge from "../../assets/img/banner-image-large.png";
import bannerTow from "../../assets/img/Banner Image Two.jpg";
import aboutCenter from "../../assets/img/ellipse-center.png";
import photo from "../../assets/img/avatar1.png";
import { TbBrandThreads } from "react-icons/tb";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFillAdd } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { WOW } from "wowjs";
import "animate.css";
import "./home.scss";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RingLoader } from "react-spinners";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import ViewDoctor from "../../Components/ViewDoctor/ViewDoctor";

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 2000,
    config: { miss: 1, tension: 30, friction: 20 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}
export default function HomePage() {
  useEffect(() => {
    const wow = new WOW({ live: false });
    wow.init();
  }, []);

  const sliderRef = React.useRef(null);

  const [settings, setSettings] = useState({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  });

  const updateSettings = () => {
    if (window.innerWidth <= 767) {
      setSettings({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      });
    } else {
      setSettings({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
      });
    }
  };

  useEffect(() => {
    updateSettings();
    window.addEventListener('resize', updateSettings);
    return () => window.removeEventListener('resize', updateSettings);
  }, []);

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const previousSlide = () => {
    sliderRef.current.slickPrev();
  };

  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

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
    <div className="home container m-auto py-5">
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
      <div className="row py-3">
        <div className="center-element align-items-start text col-lg-6 col-md-12">
          <h1 className="wow animate__animated animate__lightSpeedInLeft">
          The best dental care <span>Services </span>Available
          </h1>
          <p className="text-muted my-3 wow animate__animated animate__lightSpeedInLeft">
            Experience top-tier healthcare and tailored treatment for your
            well-being. Trust in our expertise to keep you healthy and vibrant.
          </p>
          <button className="my-3 mt-3 p-3  main-button rounded-full wow animate__animated animate__fadeInUp">
            <Link to="/APPOINTMENT "> Book Appointment </Link>
          </button>
          <div className="selector mt-3 bg-white shadow rounded wow animate__animated animate__backInLeft">
            <div className="d-flex gap">
              <div>
                <MdLocationOn className="icon-location" />
              </div>
              <select className="margin-select">
                <option value="first">Location</option>
                <option value="second">Los Angeles</option>
                <option value="third">New York City</option>
                <option value="forth">Chicago, USA</option>
              </select>
              <div>
                <BsPersonFillAdd className="icon-doctor" />
              </div>
              <select className="margin-select">
                <option value="first">Doctor</option>
                <option value="second">Gynecology</option>
                <option value="third">Cardiologist</option>
                <option value="forth">Oncology</option>
                <option value="forth">Neurology</option>
                <option value="forth">Pediatrics</option>
              </select>
            </div>
            <div>
              <IoSearchSharp className="search" />
            </div>
          </div>
        </div>
        <div className="center-element intro-bg mb-3 position-relative p-5 col-lg-6 col-md-12">
          <div className="position-absolute top-0 left-5 z-1">
            <img
              className="w-40 shadow rounded-full wow animate__animated animate__shakeY animate__slower-custom animate__infinite infinite"
              src={drcard}
              alt=""
            />
          </div>
          <div className="position-absolute top-0 left-5 z-2 wow animate__animated animate__shakeX animate__slower-custom animate__infinite infinite">
            <TbBrandThreads className="Threads" />
          </div>
          <div className="rerectangle position-absolute top-full left-100 z-1 wow animate__animated animate__swing animate__slower-custom animate__infinite infinite">
            <img className="w-16" src={rerectangle} alt="" />
          </div>
          <div className="doctor-intro position-absolute mb-5 top-0 left-56 z-2">
            <img
              className="doc-intro wow animate__animated animate__fadeInRight"
              src={doc}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* Services */}
      <div className="margTop head-section w-100">
        <div className="text-center py-5 w-100">
          <h2 className="main-header">Services</h2>
          <div className="d-flex justify-content-center mt-3 wow animate__animated animate__fadeInUp">
            <p className="text-center">The Best Quality Service You Can Get</p>
          </div>
        </div>

        {/* swiper */}

        <div className="slider" style={{ position: "relative", width: "80%" , margin: "0 auto" }}>
          <Slider ref={sliderRef} {...settings}>
            <div>
              <div className="serv-box text-center py-10 px-0 mx-2 border rounded">
                <div className="photo mb-2">
                  <div className="img-wrapper">
                    <img src={serv1} alt="serv1" />
                  </div>
                </div>
                <h2>Implants</h2>
                <p className="py-2 text-muted">
                we will help you to replace missing teeth, provide you with a longer-term solution, slow down bone loss and preserve relevant healthy,,
                </p>
                <div>
                  <span>
                    Learn More <MdKeyboardDoubleArrowRight className="ml-1" />
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="serv-box text-center py-10 px-2 mx-2  border rounded">
                <div className="photo mb-2">
                  <div className="img-wrapper">
                    <img src={serv2} alt="serv2" />
                  </div>
                </div>
                <h2>Orthodontics (Braces)</h2>
                <p className="py-2 text-muted">
                Braces have come a long way since we started in 1984. Prof. Dr. Kaboudan, Dr Nouran; PhD and Dr. Gholam are now introduce,
                </p>
                <div>
                  <span>
                    Learn More <MdKeyboardDoubleArrowRight className="ml-1" />
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="serv-box text-center py-10 px-2 mx-2 border rounded">
                <div className="photo mb-2">
                  <div className="img-wrapper">
                    <img src={serv3} alt="serv3" />
                  </div>
                </div>
                <h2>CEREC</h2>
                <p className="py-2 text-muted">
                With the new CEREC CAD/CAM technology you can now receive your all ceramic crowns and fillings in the same day by doing,,
                </p>
                <div>
                  <span>
                    Learn More <MdKeyboardDoubleArrowRight className="ml-1" />
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="serv-box text-center py-10 px-2 mx-2 border rounded">
                <div className="photo mb-2">
                  <div className="img-wrapper">
                    <img src={serv4} alt="serv4" />
                  </div>
                </div>
                <h2>Cosmetic dentistry</h2>
                <p className="py-2 text-muted">
                You will be able to color and reshape your teeth whether they are too big or too small, crooked, shipped, with odd appearance,,
                </p>
                <div>
                  <span>
                    Learn More <MdKeyboardDoubleArrowRight className="ml-1" />
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="serv-box text-center py-10 px-2 mx-2 border rounded">
                <div className="photo mb-2">
                  <div className="img-wrapper">
                    <img src={serv5} alt="serv5" />
                  </div>
                </div>
                <h2>Root canal treatment</h2>
                <p className="py-2 text-muted">
                Keep your teeth in good health by treating your root canal in a single visit. Root canal treatment helps you preventing jaw problems,, 
                </p>
                <div>
                  <span>
                    Learn More <MdKeyboardDoubleArrowRight className="ml-1" />
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="serv-box text-center py-10 px-2 mx-2 border rounded">
                <div className="photo mb-2">
                  <div className="img-wrapper">
                    <img src={serv6} alt="serv6" />
                  </div>
                </div>
                <h2>Oral surgeries</h2>
                <p className="py-2 text-muted">
                Our Oral Surgery team is capable of meeting all Oral and para Oral Surgical tasks with highest performance levels and professional,,
                </p>
                <div>
                  <span>
                    Learn More <MdKeyboardDoubleArrowRight className="ml-1" />
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="serv-box text-center py-10 px-2 mx-2 border rounded">
                <div className="photo mb-2">
                  <div className="img-wrapper">
                    <img src={serv7} alt="serv6" />
                  </div>
                </div>
                <h2>Periodontal therapy</h2>
                <p className="py-2 text-muted">
                Now with the new WATERLASE laser technology, you will be able to avoid gums bleeding, Abscess formation,, 
                </p>
                <div>
                  <span>
                    Learn More <MdKeyboardDoubleArrowRight className="ml-1" />
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="serv-box text-center py-10 px-2 mx-2 border rounded">
                <div className="photo mb-2">
                  <div className="img-wrapper">
                    <img src={serv8} alt="serv6" />
                  </div>
                </div>
                <h2>Dentistry for Children</h2>
                <p className="py-2 text-muted">
                At Maadi Dental Center, we provide our little patients with a ‘’children- friendly atmosphere’’ to maintain a bright and healthy,,
                </p>
                <div>
                  <span>
                    Learn More <MdKeyboardDoubleArrowRight className="ml-1" />
                  </span>
                </div>
              </div>
            </div>
          </Slider>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "50px",
            }}
          >
            <button onClick={previousSlide} style={{ margin: "0 10px" }}>
              <FaArrowCircleLeft  className="arrow-color"/>
            </button>
            <button onClick={nextSlide} style={{ margin: "0 10px" }}>
              <FaArrowCircleRight className="arrow-color"/>
            </button>
          </div>
        </div>

        {/* end swiper */}

        {/* End Services */}

        {/* about */}
        <div className="about row py-3">
          <div className="col-lg-6 col-md-6 col-sm-12 text-center">
            <div className="text-start w-100 position-relative">
              <h2 className="main-header">About</h2>

              <p className="mt-3 wow animate__animated animate__fadeInUp">
                The Best Quality Service You Can Get
              </p>

              <p className="sm-patagraph text-muted my-3">
                At MedCare, our unwavering commitment to health excellence
                drives our mission. With a dedicated team of medical experts,
                cutting-edge research, and a passion for compassionate care.
              </p>

              <div className="row">
                <div className="col-4 shadow py-2 mt-3 ml-3 rounded-xl left-border">
                  <p className="fw-normal d-flex">
                    <spam>
                      <Number n={120} />
                    </spam>
                    <span>k+</span>
                  </p>
                  <p className="sm-patagraph">Recover Patient</p>
                </div>
                <div className="col-4 shadow py-2 mt-3 ml-3 rounded-xl left-border">
                  <p className="fw-normal d-flex">
                    <spam>
                      <Number n={65} />
                    </spam>
                    <span>k+</span>
                  </p>
                  <p className="sm-patagraph">Years Experience</p>
                </div>
                <div className="col-4 shadow py-2 mt-3 ml-3 rounded-xl left-border">
                  <p className="fw-normal d-flex">
                    <spam>
                      <Number n={105} />
                    </spam>
                    <span>k+</span>
                  </p>
                  <p className="sm-patagraph">Positive Review</p>
                </div>
                <div className="col-4 shadow py-2 mt-3 ml-3 rounded-xl left-border">
                  <p className="fw-normal d-flex">
                    <spam>
                      <Number n={24} />
                    </spam>
                    <span className="">k+</span>
                  </p>
                  <p className="sm-patagraph">Service Provided</p>
                </div>
              </div>
              <button className="p-3 mt-3 main-button rounded-full">
                Learn More
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 text-center">
            <div className="position-relative">
              <div className="about-animation back-doctor position-absolute top-0 right-0 z-1 mb-5">
                <img className="bannerLarge z-2" src={bannerLarge} alt="" />
                <div className="position-absolute triangle-size top-triangle z-2 wow animate__animated animate__swing animate__slower-custom animate__infinite infinite">
                  <img src={aboutRedTop} alt="" />
                </div>
                <div className="position-absolute triangle-rotate triangle-size bottom-triangle z-2 wow animate__animated animate__swing animate__slower-custom animate__infinite infinite">
                  <img src={aboutBlueBottom} alt="" />
                </div>
                <div className="position-absolute banner-sm z-2">
                  <img className="bannerTow" src={bannerTow} alt="" />
                </div>

                <div className="position-absolute triangle-bottom triangle-size z-2 wow animate__animated animate__swing animate__slower-custom animate__infinite infinite">
                  <img className="aboutCenter" src={aboutCenter} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end about */}
      {/* our doctors */}
      <div className="head-section w-100 mt-5">
        <div className="text-start margin w-100">
          <h2 className="main-header mt-56">Our Doctors</h2>
          <div className="d-flex justify-content-between align-items-center wow animate__animated animate__fadeInUp">
            <p className="text-start my-2">Get Service From Our Quality Doctors</p>
            <Link className="main-button py-2 px-3 rounded-full" to="/Doctors">
              View All Doctors
            </Link>
          </div>
          {/* our doctors */}
          <div className="row my-3">
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
        </div>
      </div>
      {/* end our doctors */}
    </div>
  );
}
