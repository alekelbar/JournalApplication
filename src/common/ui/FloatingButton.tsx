import { DarkMode, NoteAdd } from "@mui/icons-material";
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
  actionHandler: (theme: ModeAction) => void;
}

export const FloatingButton: React.FC<Props> = ({ actionHandler }) => {
  const { isSaving } = useAppSelector(state => state.journal);

  const handleActions = (mode: ModeAction) => {
    if (mode.name === 'add' && (isSaving || location.pathname.includes('auth'))) return;
    actionHandler(mode);
  };


  return (
    <SpeedDial
      ariaLabel="Theme selected"
      sx={{ position: "fixed", bottom: { xs: '5%', sm: '10%' }, right: { xs: '5%', sm: '10%' } }}
      icon={< SpeedDialIcon />}
    >
      {
        actions.map((mode: ModeAction) => (
          <SpeedDialAction
            sx={{
              display: isSaving && mode.name === 'add' ? 'none' : ''
            }}
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
