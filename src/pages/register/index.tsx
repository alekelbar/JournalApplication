import { AppRegistrationRounded, LoginRounded } from "@mui/icons-material";
import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { AuthLayout } from "../../common/layout/AuthLayout";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { UserCredentials } from "../../types/user";
import * as yup from "yup";

const initialValues: UserCredentials = {
  email: "",
  password: "",
  fullName: "",
};

export const RegisterPage: React.FC = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .required()
        .email()
        .test(
          "min",
          "Su email, al menos debería tener 10 caracteres",
          (value) => (value?.length || 0) > 10
        ),
      password: yup.string().required(),
      fullName: yup.string().required(),
    }),
  });

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/auth");
  };

  return (
    <AuthLayout title={"Register"} onSubmit={formik.handleSubmit}>
      <Grid container direction={"column"} spacing={2}>
        <Grid item>
          <TextField
            autoComplete="off"
            placeholder="John Doe"
            fullWidth
            variant="filled"
            label="Complete name"
            onChange={formik.handleChange}
            name={"fullName"}
          />
        </Grid>
        <Grid item>
          <TextField
            autoComplete="off"
            placeholder="Email@email.com"
            fullWidth
            variant="filled"
            label="email"
            onChange={formik.handleChange}
            name={"email"}
          />
        </Grid>
        <Grid item>
          <TextField
            autoComplete="off"
            placeholder="Your Password"
            fullWidth
            variant="filled"
            label="password"
            onChange={formik.handleChange}
            name={"password"}
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
