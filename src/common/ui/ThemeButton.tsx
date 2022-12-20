import { DarkMode, LightMode } from "@mui/icons-material";
import {
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  PaletteMode,
} from "@mui/material";

interface ModeAction {
  icon: JSX.Element;
  name: PaletteMode;
}

const actions: ModeAction[] = [
  { icon: <DarkMode />, name: "dark" },
  { icon: <LightMode />, name: "light" },
];

interface Props {
  themeHandler: (theme: PaletteMode) => void;
}

export const ThemeButton: React.FC<Props> = ({ themeHandler }) => {
  return (
    <SpeedDial
      ariaLabel="Theme selected"
      sx={{ position: "fixed", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon />}
    >
      {actions.map((mode: ModeAction) => (
        <SpeedDialAction
          key={mode.name}
          icon={mode.icon}
          tooltipTitle={mode.name}
          onClick={() => themeHandler(mode.name)}
        />
      ))}
    </SpeedDial>
  );
};
