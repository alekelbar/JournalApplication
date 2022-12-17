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
      sx={{ mt: { md: 2 } }}
    >
      <Navbar setDrawerOpen={setDrawerOpen} drawerSize={DrawerSize} />
      <SideBar
        CloseDrawer={handleCloseDrawer}
        drawerSize={DrawerSize}
        open={drawerOpen}
      />
      <Container sx={{ mt: 3 }}>
        <Box component={"main"}>{children}</Box>
      </Container>
    </Grid>
  );
};
