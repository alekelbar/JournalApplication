import React from "react";
import { JournalLayout } from "../../common/layout/JournalLayout";
import { NothingSelectecView } from "../../components/NothingSelectectView";
import { NoteView } from "../../components/NoteView";
import { Grid } from "@mui/material";
import { useAppSelector } from '../../redux/hooks/hooks.redux';

export const HomePage: React.FC = () => {
  console.log("Home page rendering...");
  const { active } = useAppSelector(state => state.journal);

  return (
    <JournalLayout>
      <Grid
        container
        direction={"column"}
        justifyContent="center"
        alignItems={"center"}
      >
        {
          !!active
            ? <NoteView />
            : <NothingSelectecView />
        }
      </Grid>
    </JournalLayout>
  );
};
