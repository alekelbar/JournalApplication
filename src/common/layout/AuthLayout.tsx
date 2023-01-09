import { Grid, Typography, Box, Paper } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

interface Props {
  title: string;
  children: JSX.Element;
  onSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
}

export const AuthLayout: React.FC<Props> = ({ title, children, onSubmit }) => {
  return (
    <Grid
      container
      sx={{ width: { md: 1250 }, m: "0 auto" }}
      height={"100vh"}
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid item xs={12} sm={6} md={4} >
        <Container>
          <Paper sx={{ p: 4 }}>
            <Box component={"form"} onSubmit={onSubmit}>
              <Typography variant="h4" color={"secondary"} mb={3}>
                {title}
              </Typography>
              {children}
            </Box>
          </Paper>
        </Container>
      </Grid>
    </Grid>
  );
};
