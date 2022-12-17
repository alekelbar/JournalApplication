import { Grid } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

export const AuthLayout: React.FC = () => {
  return (
    <Grid container width={"100%"} height={"100vh"}>
      <Outlet />
    </Grid>
  );
};
