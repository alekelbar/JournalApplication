import { createTheme, PaletteMode } from "@mui/material";
import { ModeAction } from '../common/types/index';
import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks.redux';
import { setMode } from '../redux/slices/theme';
import { startCreateEmptyNote } from '../redux/thunks/journal/index';

interface ThemeConfig {
  MODE: PaletteMode;
  PRIMARY_C: string;
  SECONDARY_C: string;
  BG_COLOR: string;
  FONT_GLOBAL: string;
}

export const themeConfig: ThemeConfig = {
  MODE: "dark",
  PRIMARY_C: "#4fa327",
  SECONDARY_C: "#27a33e",
  BG_COLOR: "#4c4b4b",
  FONT_GLOBAL: "Raleway, sans-serif",
};

export const useActions = () => {

  //TODO:  buscar el modo en el estado...
  const { mode } = useAppSelector(state => state.theme);
  const dispatch = useAppDispatch();

  const theme = createTheme({
    palette: {
      mode: mode ? "dark" : "light",

      primary: {
        main: themeConfig.PRIMARY_C,
      },
      secondary: {
        main: themeConfig.SECONDARY_C,
      },
      background: {
        default: themeConfig.BG_COLOR,
      },
    },
    typography: {
      fontFamily: themeConfig.FONT_GLOBAL,
      button: {
        textTransform: "none",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {},
        defaultProps: {
          style: {
            borderRadius: ".8em",
            boxShadow: "none",
          },
        },
      },
    },
  });

  const switchMode = () => {
    dispatch(setMode())
  }

  const handleAction = (mode: ModeAction) => {
    switch (mode.name) {
      case 'theme':
        switchMode();
        break;
      case 'add':
        dispatch(startCreateEmptyNote());
        break;
    }
  };

  return { theme, handleAction };
};
