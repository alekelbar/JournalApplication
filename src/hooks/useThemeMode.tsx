import { createTheme, PaletteMode } from "@mui/material";
import React, { useState } from "react";

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

export const useThemeMode = () => {
  const [mode, setMode] = useState(true);
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

  const handleTheme = (mode: PaletteMode) => {
    setMode(mode === "dark" ? true : false);
  };

  return { theme, handleTheme };
};
