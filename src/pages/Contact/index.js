/* eslint-disable react/jsx-no-duplicate-props */
import React, { useEffect, useRef } from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";
import { WOW } from "wowjs";
export default function Index() {

	 // eslint-disable-next-line react-hooks/rules-of-hooks
	 useEffect(() => {
		const wow = new WOW({live: false });
		wow.init();
	  },[])

	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_23iigtc",
				"template_4yegygj",
				form.current,
				"UROKVOaB76jqo3Am-"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	};

	return (
		<div className="contact">
			<div className="text-center">
				<h1 className='main-header wow animate__animated animate__fadeInUpBig animate__slow	1s'>CONTACT</h1>
				
				<p className='mt-3 wow animate__animated animate__fadeInDownBig animate__slow 1s'>
				WE WILL ALWAYS TRY TO BE THERE FOR YOU "because we care"
				</p>
				
			</div>
			<div className="contactUs">
				<div className="ourAddress wow animate__animated animate__fadeInTopLeft animate__slow	2s">
					<div className="parent1">
						<div className="icon">
							<FontAwesomeIcon icon={faLocationDot} />
						</div>
						<h2>Our Address</h2>
						<p>Street in front of Al-Narsh Mosque, above Tabarak Center</p>
					</div>

					<div className="parents d-flex justify-between items-center">
						<div className="parent">
							<div className="icon">
								<FontAwesomeIcon icon={faEnvelope} />
							</div>
							<h2>Email Us</h2>
							<p>d4mala@gmail.com</p>
						</div>
						<div className="parent">
							<div className="icon">
								<FontAwesomeIcon icon={faPhone} />
							</div>
							<h2>Call Us</h2>
							<p>+20 1066410187</p>
							<p>+20 7580 95388 55</p>
						</div>
					</div>
				</div>

				{/* onSubmit={handleSubmit} */}

				<form ref={form} onSubmit={sendEmail} className="formContact wow animate__animated animate__fadeInTopRight animate__slow 2s">
					{/* name && email */}
					<div className="name-email">
						<div className="name">
							<input
								type="text"
								id="name"
								name="from_name"
								required
								placeholder="name"
							/>
						</div>
						<div className="email">
							<input
								type="email"
								id="email"
								name="to_name"
								required
								placeholder="email"
							/>
						</div>
					</div>
					<div>
					</div>
					<div>
						<textarea
							id="message"
							name="message"
							required
							placeholder="message:"
						/>
					</div>
					<button className="btn" type="submit">send</button>
				</form>
			</div>
      			<iframe className="wow animate__animated animate__fadeInDownBig animate__slow 2s"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.216500058123!2d31.0384556!3d30.429964000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458792accd968c3%3A0xb10417bfe674a499!2z2YXYsdmD2LIg2KfZhNix2YjYp9ivINmE2LfYqCDYp9mE2KfYs9mG2KfZhiDYqNin2YTYqNin2KzZiNix!5e0!3m2!1sen!2seg!4v1722867431773!5m2!1sen!2seg"
					width="100%"
					height="400"
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					title="Embedded Content"
				></iframe>
		</div>
	);
}
