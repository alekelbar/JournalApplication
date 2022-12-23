import React from "react";
import { AppRegistrationRounded, Google, Login } from "@mui/icons-material";
import {
  Button,
  ButtonGroup,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { AuthLayout } from "../../common/layout/AuthLayout";
import { useFormik } from "formik";
import { UserCredentials } from "../../types";
import { useDispatch } from "react-redux";
import { startCheckingAuth } from "../../redux/thunks";
import { AnyAction } from "redux";

const initialValues: UserCredentials = {
  email: "",
  password: "",
};

export const LoginPage: React.FC = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues,
    onSubmit: (values, { resetForm }) => {
      dispatch(startCheckingAuth() as unknown as AnyAction);
      resetForm();
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email()
        .required()
        .test(
          "min",
          "Su email, al menos debería tener 10 caracteres",
          (value) => (value?.length || 0) > 10
        ),
      password: yup.string().required(),
    }),
    onReset: (values) => {
      console.log(values);
      return values;
    },
  });

  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/auth/register");
  };

  const handleGoogle = () => {
    console.log("handle login with google");
    dispatch(startCheckingAuth() as unknown as AnyAction);
  };

  return (
    <AuthLayout title="Login" onSubmit={formik.handleSubmit}>
      <Grid container direction={"column"} spacing={2}>
        <Grid item>
          <TextField
            autoComplete="off"
            placeholder="Email@email.com"
            fullWidth
            variant="filled"
            label="email"
            name="email"
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item>
          <TextField
            autoComplete="off"
            placeholder="Your Password"
            fullWidth
            variant="filled"
            label="password"
            name="password"
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item>
          <Button
            sx={{ mb: ".5em" }}
            size="small"
            color="primary"
            fullWidth
            variant="contained"
            type="submit"
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
