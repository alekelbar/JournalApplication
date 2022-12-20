import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { Navbar } from "../ui/Navbar";
import { SideBar } from "../ui/SideBar";

interface Props {
  children: JSX.Element;
}

const DrawerSize = 240;

export const JournalLayout: React.FC<Props> = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <Grid
      container
      direction={"column"}
      justifyContent={"center"}
      alignItems="center"
      m="0 auto"
    >
      <Navbar setDrawerOpen={setDrawerOpen} />
      <SideBar
        CloseDrawer={handleCloseDrawer}
        drawerSize={DrawerSize}
        open={drawerOpen}
      />
      <Grid
        container
        flexDirection={"column"}
        alignItems="center"
        justifyContent={"center"}
        maxWidth={"md"}
        mt={3}
      >
        {children}
      </Grid>
    </Grid>
  );
};
