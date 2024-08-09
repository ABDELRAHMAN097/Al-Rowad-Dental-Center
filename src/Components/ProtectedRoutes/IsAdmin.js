import React, { Fragment } from 'react';
import { useRecoilState } from 'recoil';
import { Navigate } from 'react-router-dom';
import $AuthData from '../../store/index';

export default function IsAdmin({ children }) {
  const [authRecoil] = useRecoilState($AuthData);

  if (authRecoil.role !== 'owner' && authRecoil.role !== 'admin') {
    return <Navigate to="/" />;
  }

  return <Fragment>{children}</Fragment>;
}
