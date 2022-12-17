import React from "react";
import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  console.log("Auth layout RENDERING");
  return (
    <Grid container>
      <Outlet />
    </Grid>
  );
};
