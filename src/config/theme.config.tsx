import { Theme, ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme, PaletteMode, Palette } from "@mui/material";
import React, { useState } from "react";
import { ThemeButton } from "../common/ui/ThemeButton";
import { useThemeMode } from "../hooks/useThemeMode";

interface Props {
  children: JSX.Element;
}

export const ThemeConfig: React.FC<Props> = ({ children }) => {
  const { theme, handleTheme } = useThemeMode();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ThemeButton themeHandler={handleTheme} />
      {children}
    </ThemeProvider>
  );
};
