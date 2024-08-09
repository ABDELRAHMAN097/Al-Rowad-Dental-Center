import React, { Fragment } from 'react';
// import { toast } from 'react-toastify';
import { useRecoilState } from "recoil";
import $AuthData from '../../store/index'
import {Navigate} from "react-router"


export default function NotLoggedIn( { children } ) {
  const [authRecoil] = useRecoilState($AuthData);
  if (authRecoil.isAuth) return <Navigate to="/" />;
    return <Fragment>{children}</Fragment>;
  
}