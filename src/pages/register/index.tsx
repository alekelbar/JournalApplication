import { AppRegistrationRounded, LoginRounded } from "@mui/icons-material";
import {
  Alert,
  Button,
  Divider,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { AuthLayout } from "../../common/layout/AuthLayout";
import { useAppDispatch } from "../../redux";
import { useAppSelector } from "../../redux/hooks/hooks.redux";
import { startMakeUserWithEmailAndPassword } from "../../redux/thunks";
import { UserCredentials } from "../../types/user";

const initialValues: UserCredentials = {
  email: "",
  password: "",
  fullName: "",
};

export const RegisterPage: React.FC = () => {
  console.log('register page, rendering...');
  const dispatch = useAppDispatch();

  const { errorMessage, status } = useAppSelector((state) => state.auth);

  const [authError, setAuthError] = React.useState<string | null>(errorMessage);
  const [openError, setOpenError] = React.useState(false);

  const isCheking = React.useMemo(() => status === "cheking", [status]);

  React.useEffect(() => {
    setAuthError(errorMessage);
    setOpenError(true);
  }, [errorMessage]);

  const formik = useFormik({
    initialValues,
    onSubmit: async (values, { resetForm }) => {
      const { email, password, fullName } = values;

      // because the fullname property has optional
      if (!fullName) return;
      const authResult = await dispatch(startMakeUserWithEmailAndPassword(email, password, fullName));

      if (authResult) navigate('/auth');
      resetForm({ values: initialValues });
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .required()
        .email("Your email has not the correct format"),
      password: yup
        .string()
        .required()
        .test(
          "min",
          "Su Password, al menos debería tener 6 caracteres",
          (value) => (value?.length || 0) >= 6
        ),
      fullName: yup
        .string()
        .required()
        .test(
          "min",
          "Su nombre, al menos debería tener 8 caracteres",
          (value) => (value?.length || 0) >= 8
        ),
    }),
  });

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/auth");
  };

  const onCloseError = () => {
    setOpenError(false);
  };

  return (
    <AuthLayout title={"Register"} onSubmit={formik.handleSubmit}>
      <Grid container direction={"column"} spacing={2}>
        {authError && (
          <Snackbar
            open={openError}
            onClose={() => { }}
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
            placeholder="John Doe"
            color={
              formik.errors.fullName && formik.touched.fullName
                ? "error"
                : "secondary"
            }
            helperText={formik.errors.fullName || ""}
            fullWidth
            variant="filled"
            label="Complete name"
            onChange={formik.handleChange}
            name={"fullName"}
            value={formik.values.fullName}
            onBlur={formik.handleBlur}
            FormHelperTextProps={{
              sx: {
                '&:hover': {
                  color: 'white'
                },
              }
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            autoComplete="on"
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
            onChange={formik.handleChange}
            name={"email"}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            FormHelperTextProps={{
              sx: {
                '&:hover': {
                  color: 'white'
                },
              }
            }}
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
            onChange={formik.handleChange}
            name={"password"}
            type={'password'}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            FormHelperTextProps={{
              sx: {
                '&:hover': {
                  color: 'white'
                },
              }
            }}
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
            <AppRegistrationRounded />
            <Typography mx={1}>Register</Typography>
          </Button>
          <Divider />

          <Button
            variant={"contained"}
            fullWidth
            size={"small"}
            onClick={handleLogin}
            disabled={isCheking}
          >
            <LoginRounded />
            <Typography mx={1}>Are ready registered? Login</Typography>
          </Button>
        </Grid>
      </Grid>
    </AuthLayout>
  );
};
