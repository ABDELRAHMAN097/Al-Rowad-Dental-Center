/* eslint-disable react/jsx-no-duplicate-props */
import React, { useRef } from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";
export default function Index() {
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
			<div className="intro-services">
				<h1>CONTACT</h1>
				<span className="line"></span>
				<p>
					{" "}
					Magnam dolores commodi suscipit. Necessitatibus eius
					consequatur ex aliquid fuga eum quidem. Sit sint consectetur
					velit. Quisquam quos quisquam cupiditate. Et nemo qui
					impedit suscipit alias ea. Quia fugiat sit in iste officiis
					commodi quidem hic quas.{" "}
				</p>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1718.0624173338467!2d31.011354804373642!3d30.54577690191162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7d65e3d189b97%3A0x874f56a556466cee!2sEgyptian%20Red%20Crescent%20Hospital!5e0!3m2!1sen!2seg!4v1711465566580!5m2!1sen!2seg"
					width="100%"
					height="400"
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					title="Embedded Content"
				></iframe>
			</div>
			<div className="contactUs">
				<div className="ourAddress">
					<div className="parent1">
						<div className="icon">
							<FontAwesomeIcon icon={faLocationDot} />
						</div>
						<h2>Our Address</h2>
						<p>A108 Adam Street, New York, NY 535022</p>
					</div>

					<div className="parents d-flex justify-between items-center">
						<div className="parent">
							<div className="icon">
								<FontAwesomeIcon icon={faEnvelope} />
							</div>
							<h2>Email Us</h2>
							<p>contact@example.com</p>
							<p>info@example.com</p>
						</div>
						<div className="parent">
							<div className="icon">
								<FontAwesomeIcon icon={faPhone} />
							</div>
							<h2>Call Us</h2>
							<p>+1 5589 55488 55</p>
							<p>+1 7580 95388 55</p>
						</div>
					</div>
				</div>

				{/* onSubmit={handleSubmit} */}

				<form ref={form} onSubmit={sendEmail} className="formContact">
					{/* name && email */}
					<div className="name-email">
						<div className="name">
							<input
								type="text"
								id="name"
								name="to_name"
								required
								placeholder="الاسم"
							/>
						</div>
						<div className="email">
							<input
								type="email"
								id="email"
								name="user_email"
								required
								placeholder="البريد الالكتروني"
							/>
						</div>
					</div>
					<div>
						<input
							type="text"
							id="subject"
							name="subject"
							// value={formData.subject}
							// onChange={handleChange}
							placeholder=":الموضوع"
							required
						/>
					</div>
					<div>
						<textarea
							id="message"
							name="message"
							// value={formData.message}
							// onChange={handleChange}
							required
							placeholder="الرسالة:"
						/>
					</div>
					<button type="submit">إرسال</button>
				</form>
			</div>
		</div>
	);
}
