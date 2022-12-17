import { ThemeConfig } from "./config/theme.config";
import { Box, Button } from "@mui/material";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <ThemeConfig>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeConfig>
  );
}

export default App;
