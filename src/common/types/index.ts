import { PaletteMode } from "@mui/material";

export type ModeAction = {
  icon: JSX.Element;
  name: Actions;
};

type Actions = 'theme' | 'add';

