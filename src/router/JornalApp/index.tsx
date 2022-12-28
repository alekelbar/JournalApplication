import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from '../../pages/home/index';

export const JournalRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  )
}
