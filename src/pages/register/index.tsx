import { AppRegistrationRounded, LoginRounded } from "@mui/icons-material";
import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { AuthLayout } from "../../common/layout/AuthLayout";
import { useNavigate } from "react-router-dom";

export const RegisterPage: React.FC = () => {
  console.log("Register Page RENDERING");

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/auth");
  };
  return (
    <AuthLayout title={"Register"}>
      <Grid container direction={"column"} spacing={2}>
        <Grid item>
          <TextField
            placeholder="John Doe"
            fullWidth
            variant="outlined"
            label="Complete name"
          />
        </Grid>
        <Grid item>
          <TextField
            placeholder="Email@email.com"
            fullWidth
            variant="outlined"
            label="email"
          />
        </Grid>
        <Grid item>
          <TextField
            placeholder="Your Password"
            fullWidth
            variant="outlined"
            label="password"
          />
        </Grid>
        <Grid item>
          <Button
            sx={{ mb: ".5em" }}
            size="small"
            color="primary"
            fullWidth
            variant="contained"
          >
            <AppRegistrationRounded />
            <Typography mx={1}>Register</Typography>
          </Button>
          <Divider />

          <Button
            variant={"contained"}
            fullWidth
            size={"small"}
            onClick={handleLogin}
          >
            <LoginRounded />
            <Typography mx={1}>Are ready registered? Login</Typography>
          </Button>
        </Grid>
      </Grid>
    </AuthLayout>
  );
};
