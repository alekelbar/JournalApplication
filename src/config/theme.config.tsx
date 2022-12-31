import { Theme, ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme, PaletteMode, Palette } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FloatingButton } from "../common/ui/FloatingButton";
import { useActions } from "../hooks/useActions";

interface Props {
  children: JSX.Element;
}

export const ThemeConfig: React.FC<Props> = ({ children }) => {
  const { theme, handleAction } = useActions();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FloatingButton actionHandler={handleAction} />
      {children}
    </ThemeProvider>
  );
};
