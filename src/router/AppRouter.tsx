import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { Layout } from "../common/layout/AppLayout";
import { HomePage } from "../pages/home/index";
import { LoginPage } from "../pages/login";
import { AuthLayout } from "../common/layout/AuthLayout";
import { RegisterPage } from "../pages/register/registerPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="/auth" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
      </Route>
      <Route path="/*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};
