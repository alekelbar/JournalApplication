import { Close, TurnedIn } from "@mui/icons-material";
import { useAppSelector, useAppDispatch } from '../../redux/hooks/hooks.redux';
import { Note } from '../../redux/slices/journal/types/journal.type';
import {
  Grid,
  ListItemButton,
  Box,
  ListItemText,
  Divider,
  ListItemIcon
} from "@mui/material";
import {
  Avatar,
  Drawer,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { setActiveNote } from "../../redux/slices/journal";
import { Container } from '@mui/system';
import image from './../../assets/empty.jpg';
import { Image } from "../../components";

interface Props {
  drawerSize: number;
  open: boolean;
  CloseDrawer: VoidFunction;
}

export const SideBar: React.FC<Props> = ({ drawerSize, open, CloseDrawer }) => {

  const { notes } = useAppSelector(state => state.journal);
  const { displayName } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  const handleCloseWithEsc = (e: React.KeyboardEvent) => {
    if (e.code === "Escape") CloseDrawer();
  };

  const handleOutClick = (e: React.MouseEvent) => {
    if (e.pageX > 380) CloseDrawer();
  };

  const onActiveNote = (note: Note) => {
    dispatch(setActiveNote(note));
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
        <Container>
          <Grid
            container
            direction={"column"}
            justifyContent={"space-between"}
            alignItems={"center"}
            my={2}
          >
            <Grid item>
              <IconButton sx={{ bgcolor: 'error.main' }} onClick={() => CloseDrawer()}>
                <Close fontSize="small" />
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
                <Avatar />
                <Typography mb={1} variant="h6">{displayName}</Typography>

              </Box>
            </Grid>
          </Grid>
        </Container>
        <Divider sx={{ my: 2 }} />
        <List sx={{ overflow: "auto" }}>
          {notes.length
            ?
            notes.map((note) => (
              <ListItem key={note.date}>
                <ListItemButton onClick={() => { onActiveNote(note); }}>
                  <ListItemIcon>
                    <TurnedIn />
                  </ListItemIcon>
                  <Grid container direction={"column"}>
                    <ListItemText
                      primary={note.title}
                    />
                    <ListItemText
                      sx={{ maxWidth: 250, overflow: "hidden" }}
                      secondary={
                        note.body
                      }
                    />
                  </Grid>
                </ListItemButton>
              </ListItem>
            ))
            :
            <Grid container width={'100%'} direction="column" alignItems={'center'}>
              <Typography variant="h4">Empty Room</Typography>
              <Image
                containerStyles={{ display: 'flex', justifyContent: 'center' }}
                image={image}
              />
            </Grid>
          }
        </List>
      </Drawer>
    </Box>
  );
};
