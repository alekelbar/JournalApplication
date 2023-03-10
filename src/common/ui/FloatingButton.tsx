import { Add, DarkMode, Note, NoteAdd } from "@mui/icons-material";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ModeAction } from '../types/index';
import { useAppSelector } from '../../redux/hooks/hooks.redux';
import {
  SpeedDial,
  SpeedDialAction, SpeedDialIcon
} from "@mui/material";

const actions: ModeAction[] = [
  { icon: <DarkMode />, name: "theme" },
  { icon: <NoteAdd />, name: 'add' },
];

interface Props {
  actionHandler: (theme: ModeAction) => void
}

export const FloatingButton: React.FC<Props> = ({ actionHandler }) => {
  const { isSaving } = useAppSelector(state => state.journal);

  const handleActions = (mode: ModeAction) => {
    if (mode.name === 'add' && (isSaving || location.pathname.includes('auth'))) return;
    actionHandler(mode);
  }


  return (
    <SpeedDial
      ariaLabel="Theme selected"
      aria-setsize={150}
      sx={{ position: "fixed", bottom: { xs: 16, sm: '10vh' }, right: { xs: 16, sm: 'calc(50% - 56px/2)' } }}
      icon={< SpeedDialIcon />}
    >
      {
        actions.map((mode: ModeAction) => (
          <SpeedDialAction
            key={mode.name}
            icon={mode.icon}
            tooltipTitle={mode.name}
            onClick={() => handleActions(mode)}
          />
        ))
      }
    </SpeedDial >
  );
};
