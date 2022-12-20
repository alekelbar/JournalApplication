import React from "react";
import { JournalLayout } from "../../common/layout/JournalLayout";
import { NothingSelectecView } from "../../components/NothingSelectectView";
import { NoteView } from "../../components/NoteView";
import { Grid } from "@mui/material";

export const HomePage: React.FC = () => {
  console.log("Home page rendering...");
  return (
    <JournalLayout>
      {/* <NothingSelectecView /> */}
      <Grid
        container
        direction={"column"}
        justifyContent="center"
        alignItems={"center"}
      >
        <NoteView />
      </Grid>
    </JournalLayout>
  );
};
