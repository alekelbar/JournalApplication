import React, { useMemo } from "react";
import { AppRegistrationRounded, Google, Login } from "@mui/icons-material";
import {
  Alert,
  Button,
  ButtonGroup,
  Divider,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { AuthLayout } from "../../common/layout/AuthLayout";
import { useFormik } from "formik";
import { UserCredentials } from "../../types";
import { startCheckingAuth } from "../../redux/thunks";
import { AnyAction } from "redux";
import { startGoogleSignIn } from "../../redux/thunks/auth/index";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks.redux";

const initialValues: UserCredentials = {
  email: "",
  password: "",
};

export const LoginPage: React.FC = () => {
  // Status del proceso...
  const { status, errorMessage } = useAppSelector((state) => state.auth);

  const [authError, setAuthError] = React.useState<string | null>(errorMessage);
  const [openError, setOpenError] = React.useState(false);

  const isCheking = useMemo(() => status === "cheking", [status]);

  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues,
    onSubmit: (values, { resetForm }) => {
      dispatch(startCheckingAuth());
      resetForm({ values: initialValues });
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email()
        .required()
        .test(
          "min",
          "Su email, al menos debería tener 10 caracteres",
          (value) => (value?.length || 0) >= 10
        ),
      password: yup
        .string()
        .required()
        .test(
          "min",
          "Su Password, al menos debería tener 10 caracteres",
          (value) => (value?.length || 0) >= 10
        ),
    }),
  });

  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/auth/register");
  };

  const handleGoogle = () => {
    dispatch(startGoogleSignIn());
  };

  const onCloseError = () => {
    setOpenError(false);
  };

  return (
    <AuthLayout title="Login" onSubmit={formik.handleSubmit}>
      <Grid container direction={"column"} spacing={2}>
        {authError && (
          <Snackbar
            open={openError}
            onClose={() => {}}
            autoHideDuration={3000}
            anchorOrigin={{ horizontal: "center", vertical: "top" }}
          >
            <Alert severity="error" onClose={onCloseError}>
              {authError}
            </Alert>
          </Snackbar>
        )}
        <Grid item>
          <TextField
            autoComplete="off"
            placeholder="Email@email.com"
            color={
              formik.errors.email && formik.touched.email
                ? "error"
                : "secondary"
            }
            helperText={formik.errors.email || ""}
            fullWidth
            variant="filled"
            label="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Grid>
        <Grid item>
          <TextField
            autoComplete="off"
            placeholder="Your Password"
            color={
              formik.errors.password && formik.touched.password
                ? "error"
                : "secondary"
            }
            helperText={formik.errors.password || ""}
            fullWidth
            variant="filled"
            label="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
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
            disabled={isCheking}
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
              disabled={isCheking}
            >
              <Google />
              <Typography mx={1}>Google</Typography>
            </Button>

            <Button
              variant={"contained"}
              fullWidth
              size={"small"}
              onClick={handleRegister}
              disabled={isCheking}
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
