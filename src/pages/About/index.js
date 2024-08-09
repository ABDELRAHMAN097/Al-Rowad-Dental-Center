import React from 'react'
import { useEffect } from 'react'
import './index.scss'
import sign from '../../assets/img/sign.jpg'
import team from '../../assets/img/team-banner.jpg'
import features from '../../assets/img/features.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faCheck, faCubesStacked, faFile, faFlask, faImage, faShield, faUserDoctor } from '@fortawesome/free-solid-svg-icons'
import { WOW } from "wowjs";
import 'animate.css'
import { faHospitalAlt } from '@fortawesome/free-regular-svg-icons'
import { useSpring , animated } from 'react-spring'
import { Link } from 'react-router-dom'
function Number ({ n }) {
  const {number} = useSpring({
    from: { number : 0},
    number: n,
    delay: 4000,
    config: {miss: 1, tension: 20, friction: 10},
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;   
}
export default function index() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const wow = new WOW({live: false });
    wow.init();
  },[])
 
  
  return (
    <div className='apout'>
    <div className='intro-about  text-center'>
      <h1 className='main-header my-3 wow animate__animated animate__fadeInUpBig animate__slow	1s'>About - Us</h1>
     
      <p className='text-muted wow animate__animated animate__fadeInDownBig animate__slow	1s'> 
      Al-Rowad Dental Center in Al-Bajour
      A medical team works in one spirit to get you the best and sweetest smile by providing immediate cosmetic, dental treatment and implant services.
      </p>
    </div>
    <div className='row'>
    <div className='col-lg-6 wow animate__animated animate__backInLeft'>
     
      <img className='' src={sign} alt='Al-Rowad sign'/>
   
    </div>
    <div className='about-Mission col-lg-6 wow animate__animated animate__backInRight'>
    <h2 className='mb-3'>Our Mission</h2>
    <p>Our mission is maxillofacial surgery, dental fillings, cosmetic dentistry, and root canal treatment</p>
    <p><span><FontAwesomeIcon icon={faCheck} className=''/></span>The latest types of fixed and removable dental implants</p>
    <p><span><FontAwesomeIcon icon={faCheck} className=''/></span>Children's dental treatment</p>
    <p><span><FontAwesomeIcon icon={faCheck} className=''/></span>orthodontics</p>
    <p><span><FontAwesomeIcon icon={faCheck} className=''/></span>Dental implants</p>
    <button className="mt-3 py-2 main-button rounded-full wow animate__animated animate__fadeInUp">
            <Link to="/APPOINTMENT "> Book Appointment </Link>
    </button>
    </div>
    </div>
    <div className='row mt-3'>
    <div className='about-Mission col-lg-6 wow animate__animated animate__backInRight'>
    <h2 className='mb-3'>What Sets Us Apart</h2>
    <div className='mt-3'>
    <h3>Trustworthiness</h3>
    <p>Al-Rowad Center is committed to providing accurate and up-to-date medical information. Our content is curated by a team of medical experts, ensuring you get information you can rely on.</p>
    </div>
    <div className='mt-3'>
    <h3>Trustworthiness</h3>
    <p>Al-Rowad Center is committed to providing accurate and up-to-date medical information. Our content is curated by a team of medical experts, ensuring you get information you can rely on.</p>
    </div>
    <div className='mt-3'>
    <h3>Trustworthiness</h3>
    <p>Al-Rowad Center is committed to providing accurate and up-to-date medical information. Our content is curated by a team of medical experts, ensuring you get information you can rely on.</p>
    </div>
  


    </div>
    <div className='col-lg-6 wow animate__animated animate__backInLeft'>
      <div className=''>
      <img className='' src={team} alt='Al-Rowad team'/>
      </div>
    </div>
    </div>
<div className='taps'>

<div className='tap-about wow animate__animated animate__fadeInLeft'>
<div className='num'><span> <FontAwesomeIcon icon={faUserDoctor}/> </span> <Number n={8055}/> </div>
<h3><span className='dd'>Departments</span>adipisci atque cum quia aut numquam delectus</h3>
  <p className='small' >Find out more »</p>

</div>

<div className='tap-about  wow animate__animated animate__fadeInDownBig'>
  
  <div className='num'><span><FontAwesomeIcon icon={faHospitalAlt} /></span> <Number  n={2600}/> </div>
  <h3><span className='dd'>Departments</span>adipisci atque cum quia aut numquam delectus</h3>
  <p className='small' >Find out more »</p>

</div>

<div className='tap-about  wow animate__animated animate__fadeInTopRight'>
<div className='num'><span> <FontAwesomeIcon icon={faFlask}/> </span> <Number  n={1504}/></div>
<h3><span className='dd'>Departments</span>adipisci atque cum quia aut numquam delectus</h3>
  <p className='small' >Find out more »</p>

</div>

<div className='tap-about  wow animate__animated animate__fadeInDown animate__delay-1s'>
<div className='num'><span> <FontAwesomeIcon icon={faAward}/> </span> <Number n={1150}/></div>
<h3><span className='dd'>Departments</span>adipisci atque cum quia aut numquam delectus</h3>
  <p className='small' >Find out more »</p>
</div>

</div>

    <div className='row'>
   
    <div className='col-lg-6 text-about wow animate__animated animate__backInRight  animate__delay-1s'>
    <h2 className='main-header'>Vision</h2>
    <p className='apout-p text-start'>To be a leader in dental healthcare, recognized for our exceptional patient care and innovative treatments.</p>
    <p><span><FontAwesomeIcon className='mr-2' icon={faFile} /></span>Comprehensive health care</p>
    <p><span><FontAwesomeIcon className='mr-2' icon={faCubesStacked} /></span>The best medical staff in Egypt</p>
    <p><span><FontAwesomeIcon className='mr-2' icon={faImage} /></span>The latest medical devices</p>
    <p><span><FontAwesomeIcon className='mr-2' icon={faShield} /></span>Equipment at the highest level of efficiency</p>
    </div>
    <div className='col-lg-6 img-about wow animate__animated animate__backInLeft  animate__delay-1s'>
      <img src={features} alt='features'/>
    </div>

    </div>
    </div>
  )
}
