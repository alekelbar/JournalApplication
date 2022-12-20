import { LogoutRounded, MenuOutlined } from "@mui/icons-material";
import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Menu,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Box } from "@mui/material";

interface Props {
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar: React.FC<Props> = ({ setDrawerOpen }) => {
  const handleDrawer = () => {
    setDrawerOpen(true);
  };

  return (
    <Grid container>
      <AppBar position="sticky">
        <Toolbar>
          <Grid container justifyContent={"space-around"} alignItems="end">
            <Grid item>
              <IconButton onClick={() => handleDrawer()}>
                <MenuOutlined />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography variant="h6" textAlign={"center"}>
                Journal-App
              </Typography>
            </Grid>
            <Grid item>
              <Grid item>
                <IconButton>
                  <LogoutRounded />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};
