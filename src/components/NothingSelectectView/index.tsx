import React from "react";
import { Grid, Typography } from "@mui/material";
import { StarOutline } from "@mui/icons-material";

export const NothingSelectecView: React.FC = () => {
  return (
    <Grid
      container
      direction={"column"}
      justifyContent={"center"}
      alignItems="center"
      sx={{
        minHeight: `calc(100vh - 120px)`,
        backgroundColor: "background.main",
        borderRadius: "20px",
        maxWidth: "550px",
        width: '90%'
      }}
    >
      <Grid item>
        <Grid
          container
          justifyContent={"center"}
          alignItems="center"
          direction={"column"}
        >
          <Typography>Nothing selected</Typography>
          <StarOutline />
        </Grid>
      </Grid>
    </Grid>
  );
};
