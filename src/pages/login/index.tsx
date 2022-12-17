import { AppRegistrationRounded, Google, Login } from "@mui/icons-material";
import {
  Button,
  ButtonGroup,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthLayout } from "../../common/layout/AuthLayout";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/auth/register");
  };

  const handleGoogle = () => {
    console.log("handle login with google");
  };

  return (
    <AuthLayout title="Login">
      <Grid container direction={"column"} spacing={2}>
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
            <Login />
            <Typography mx={1}>Login</Typography>
          </Button>
          <Divider />

          <ButtonGroup fullWidth>
            <Button
              variant={"contained"}
              fullWidth
              size={"small"}
              onClick={handleGoogle}
            >
              <Google />
              <Typography mx={1}>Google</Typography>
            </Button>

            <Button
              variant={"contained"}
              fullWidth
              size={"small"}
              onClick={handleRegister}
            >
              <AppRegistrationRounded />
              <Typography mx={1}>Register</Typography>
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </AuthLayout>
  );
};
