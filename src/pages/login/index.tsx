import { Google, Login } from "@mui/icons-material";
import {
  Button,
  Divider,
  Grid,
  IconButton,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/auth/register");
  };

  return (
    <Grid
      container
      width={"100%"}
      height={"100vh"}
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid item xs={10} md={4} sm={6}>
        <Paper sx={{ p: 4 }}>
          <Box component={"form"}>
            <Typography variant="h4" color={"secondary"} mb={3}>
              Sign-In
            </Typography>
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

                <Button
                  variant={"text"}
                  fullWidth
                  size={"small"}
                  onClick={handleRegister}
                >
                  <Google />
                  <Typography mx={1}>Register</Typography>
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};
