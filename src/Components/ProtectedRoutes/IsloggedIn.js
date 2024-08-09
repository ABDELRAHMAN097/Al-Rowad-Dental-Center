import React, { Fragment } from 'react';
import { useRecoilState } from "recoil";
import $AuthData from '../../store/index'
import {Navigate} from "react-router"


export default function IsloggedIn({children}) {
  const [authRecoil] = useRecoilState($AuthData);
    if(!authRecoil.isAuth) return <Navigate to= '/login'/> 
  return <Fragment>{children}</Fragment>
}
