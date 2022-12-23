import React from "react";
import { Button, Grid, Typography, TextField } from "@mui/material";
import { Container } from "@mui/system";
import { ImageGallery } from "../ImageGallery";

export const NoteView = () => {
  return (
    <Container>
      <Grid
        container
        direction={"row"}
        spacing={2}
        width="100%"
        justifyContent={"center"}
        alignItems="center"
      >
        {/* Fecha y acciones */}
        <Grid item sm={6} xs={12}>
          {/* Formulario... */}
          <Grid container justifyContent={"space-between"} alignItems="center">
            <Typography color={"primary.main"}>
              {new Date("December 17, 1995 03:24:00").toDateString()}
            </Typography>
            <Button variant="contained">Save Note</Button>
          </Grid>
          <Grid container direction={"column"} mt={2}>
            <Grid item mb={".5em"}>
              <TextField
                label="Titulo"
                fullWidth
                color="secondary"
                placeholder="¿Cual es el título?"
              />
            </Grid>
            <Grid item mt={".5em"}>
              <TextField
                label="Contenido"
                fullWidth
                color="secondary"
                multiline
                minRows={12}
                placeholder="Que estas pensando?"
              />
            </Grid>
          </Grid>
        </Grid>
        {/* Imagenes... */}
        <Grid item xs={12} sm={6}>
          <ImageGallery />
        </Grid>
      </Grid>
    </Container>
  );
};
