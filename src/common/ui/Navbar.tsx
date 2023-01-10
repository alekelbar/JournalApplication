import { LogoutRounded, MenuOutlined } from "@mui/icons-material";
import {
  AppBar,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useAppDispatch } from '../../redux/hooks/hooks.redux';
import { startLogoutFirebase } from '../../redux/thunks/auth/index';

interface Props {
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar: React.FC<Props> = ({ setDrawerOpen }) => {
  const handleDrawer = () => {
    setDrawerOpen(true);
  };

  const dispatch = useAppDispatch();

  const handleLogOut = async () => {
    await dispatch(startLogoutFirebase());
  };

  return (
    <Grid container>
      <AppBar position="sticky">
        <Toolbar>
          <Grid container direction={'row'} justifyContent={"space-between"} alignItems="center">
            <Grid item>
              <Grid container direction={'row'} alignItems='center'>
                <IconButton onClick={() => handleDrawer()}>
                  <MenuOutlined color="secondary" />
                </IconButton>
                <Typography color={'whitesmoke'} variant="h5" textAlign={"center"}>
                  Journal-App
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Grid item>
                <IconButton onClick={handleLogOut}>
                  <LogoutRounded color="secondary" />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};
