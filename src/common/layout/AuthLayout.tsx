import { Grid, Typography, Box, Paper } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

interface Props {
  title: string;
  children: JSX.Element;
}

export const AuthLayout: React.FC<Props> = ({ title, children }) => {
  console.log("auth template RENDERING");
  return (
    <Grid
      container
      sx={{ width: { md: 1250 }, m: "0 auto" }}
      height={"100vh"}
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid item>
        <Paper sx={{ p: 4 }}>
          <Box component={"form"}>
            <Typography variant="h4" color={"secondary"} mb={3}>
              {title}
            </Typography>
            {children}
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};
