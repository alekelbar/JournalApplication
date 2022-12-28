import { Close, TurnedIn } from "@mui/icons-material";
import { useAppSelector } from '../../redux/hooks/hooks.redux';
import {
  Grid,
  ListItemButton,
  Box,
  ListItemText,
  Divider,
  ListItemIcon,
} from "@mui/material";
import {
  Avatar,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";

interface Props {
  drawerSize: number;
  open: boolean;
  CloseDrawer: VoidFunction;
}

export const SideBar: React.FC<Props> = ({ drawerSize, open, CloseDrawer }) => {

  const { displayName } = useAppSelector(state => state.auth);

  const handleCloseWithEsc = (e: React.KeyboardEvent) => {
    console.log(e);
    if (e.code === "Escape") CloseDrawer();
  };

  const handleOutClick = (e: React.MouseEvent) => {
    if (e.pageX > 380) CloseDrawer();
  };

  return (
    <Box component={"nav"}>
      <Drawer
        variant="temporary"
        open={open}
        sx={{ display: { sm: "block" }, width: drawerSize }}
        onKeyDown={handleCloseWithEsc}
        onClick={handleOutClick}
      >
        <Toolbar>
          <Grid
            container
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Grid item>
              <IconButton onClick={() => CloseDrawer()}>
                <Close fontSize="large" />
              </IconButton>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  m: "0 auto",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Avatar sx={{ mt: 1 }} />
                <Typography mb={1} variant="body1">{displayName}</Typography>

              </Box>
            </Grid>
          </Grid>
        </Toolbar>
        <Divider sx={{ my: 2 }} />
        <List sx={{ overflow: "auto" }}>
          {["enero", "febrero", "marzo", "abril", "junio", "Julio"].map((e) => (
            <ListItem key={e}>
              <ListItemButton>
                <ListItemIcon>
                  <TurnedIn />
                </ListItemIcon>
                <Grid container direction={"column"}>
                  <ListItemText
                    primary={e[0].toUpperCase() + e.slice(1, e.length)}
                  />
                  <ListItemText
                    sx={{ maxWidth: 250, overflow: "hidden" }}
                    secondary={
                      "Do sunt ullamco duis sit et elit cillum in deserunt consequat dolore deserunt veniam sunt."
                    }
                  />
                </Grid>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
