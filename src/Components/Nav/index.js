import React, { Fragment, useState } from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { useRecoilState } from "recoil";
import $AuthData from "../../store/index";
import LogOut from "../LogOut/LogOut";

export default function Navbar() {
  const [authRecoil] = useRecoilState($AuthData);
  const [isopen, setisopen] = useState(false);
  return (
    <div className="shadow-md w-full" id="nav">
      <div className="md:flex items-center justify-between py-4 px-8 bg-transparent">
        <div className="logo flex text-2xl cursor-pointer items-center gap-2">
          <img src={logo} alt="" />
        </div>
        <div
          onClick={() => setisopen(!isopen)}
          className="w-10 h-10 absolute right-8 top-6 md:hidden"
        >
          {isopen ? (
            <FontAwesomeIcon className="w-7 h-7 z-ind" icon={faXmark} />
          ) : (
            <FontAwesomeIcon className="w-7 h-7" icon={faBars} />
          )}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-19 absolute md:static md:z-auto z-[2] left-0 w-full md:w-auto md:pl-0 pl-11 bg-white transition-all duration-500 ease-in ${
            isopen ? "top-14" : "top-[-490px]"
          }`}
        >
          <li className="font-semibold my-7 md:my-0 md:ml-8">
            <Link to="">Home</Link>
          </li>
          <li className="font-semibold my-7 md:my-0 md:ml-8">
            <Link to="/about">About</Link>
          </li>
          <li className="font-semibold my-7 md:my-0 md:ml-8">
            <Link to="/services">Services</Link>
          </li>
          <li className="font-semibold my-7 md:my-0 md:ml-8">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="font-semibold my-7 md:my-0 md:ml-8">
                <Link to="/doctors">Doctors</Link>
              </li>
          {authRecoil.isAuth && (
            <Fragment>
               <li className="font-semibold md:my-0 md:ml-2">
               <LogOut/>
              </li>
              <li className="font-semibold my-7 md:my-0 md:ml-2">
                {authRecoil.role === "owner" || authRecoil.role === "admin" ? (
                  <Link
                    className="btn px-3 rounded-full md:static"
                    to="/Dashboard"
                  >
                    Dashboard
                  </Link>
                ) : (
                  <Link
                    className="btn rounded-full py-1 px-3 md:ml-3 md:static text-white"
                    to="/APPOINTMENT"
                  >
                  Appointment
                  </Link>
                )}
              </li>
            </Fragment>
          )}
          {!authRecoil.isAuth && (
            <Fragment>
              <li className="btn font-semibold my-7 md:my-0 md:ml-8  text-white">
                <Link to="/register">Register</Link>
              </li>
              <li className="btn font-semibold my-7 md:my-0 md:ml-8  text-white">
                <Link to="/login">Login</Link>
              </li>
            </Fragment>
          )}
        </ul>
      </div>
    </div>
  );
}
