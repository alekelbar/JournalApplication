import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import { LoginPage } from '../../pages/login/index';
import { RegisterPage } from '../../pages/register/index';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="*" element={<Navigate to={"/login"} />} />
    </Routes>
  )
}
