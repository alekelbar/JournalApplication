import { Box, Grid } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../ui/Navbar";

export const Layout = () => {
  return (
    <Grid container>
      <Navbar />
      <Outlet />
    </Grid>
  );
};
