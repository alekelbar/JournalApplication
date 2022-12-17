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

interface Props {
  drawerSize: number;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar: React.FC<Props> = ({ drawerSize, setDrawerOpen }) => {
  const handleDrawer = () => {
    setDrawerOpen(true);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        maxWidth: 850,
      }}
    >
      <Toolbar>
        <Grid container justifyContent={"space-between"} alignItems="end">
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
  );
};
